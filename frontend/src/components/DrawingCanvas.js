import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eraser, RotateCcw, Check, Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

const DrawingCanvas = ({ character, onComplete }) => {
  const canvasRef = useRef(null);
  const compareCanvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [context, setContext] = useState(null);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [strokeCount, setStrokeCount] = useState(0);
  const [showComparison, setShowComparison] = useState(false);
  const [validationResult, setValidationResult] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const compareCanvas = compareCanvasRef.current;
    
    if (canvas) {
      const ctx = canvas.getContext('2d');
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.strokeStyle = '#2563eb';
      ctx.lineWidth = 8;
      setContext(ctx);
      
      // Initialize canvas with white background and guide
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      drawGuideCharacter(ctx);
      
      // Reset state
      setHasDrawn(false);
      setStrokeCount(0);
      setValidationResult(null);
    }
    
    // Draw reference character on comparison canvas
    if (compareCanvas) {
      const ctx = compareCanvas.getContext('2d');
      ctx.clearRect(0, 0, compareCanvas.width, compareCanvas.height);
      
      // White background
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, compareCanvas.width, compareCanvas.height);
      
      // Draw character in black
      ctx.font = 'bold 220px sans-serif';
      ctx.fillStyle = '#000000';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(character, 200, 210);
    }
  }, [character]);

  const drawGuideCharacter = (ctx) => {
    if (!ctx) return;
    ctx.save();
    // Very light gray guide
    ctx.globalAlpha = 0.25;
    ctx.font = 'bold 220px sans-serif';
    ctx.fillStyle = '#9ca3af';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(character, 200, 210);
    ctx.restore();
  };

  const getCoordinates = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    if (e.touches && e.touches.length > 0) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY
      };
    }
    
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY
    };
  };

  const startDrawing = (e) => {
    e.preventDefault();
    if (!context) return;
    const { x, y } = getCoordinates(e);
    context.beginPath();
    context.moveTo(x, y);
    setIsDrawing(true);
    setHasDrawn(true);
  };

  const draw = (e) => {
    e.preventDefault();
    if (!isDrawing || !context) return;

    const { x, y } = getCoordinates(e);
    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = (e) => {
    e.preventDefault();
    if (isDrawing && context) {
      context.closePath();
      setIsDrawing(false);
      setStrokeCount(prev => prev + 1);
    }
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    // Clear everything
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // White background
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Redraw guide character
    drawGuideCharacter(ctx);
    
    setHasDrawn(false);
    setStrokeCount(0);
    setValidationResult(null);
  };

  const compareDrawings = () => {
    const userCanvas = canvasRef.current;
    const refCanvas = compareCanvasRef.current;
    
    if (!userCanvas || !refCanvas) return { score: 0, message: 'Unable to compare' };
    
    const userCtx = userCanvas.getContext('2d');
    const refCtx = refCanvas.getContext('2d');
    
    // Get image data
    const userImageData = userCtx.getImageData(0, 0, userCanvas.width, userCanvas.height);
    const refImageData = refCtx.getImageData(0, 0, refCanvas.width, refCanvas.height);
    
    const userPixels = userImageData.data;
    const refPixels = refImageData.data;
    
    let userDrawnPixels = 0;
    let refDrawnPixels = 0;
    let nearMatchPixels = 0; // Pixels that are close to reference
    
    // Use a tolerance radius for matching (allows some margin for error)
    const toleranceRadius = 12; // pixels
    
    // First pass: count reference pixels and build a set of reference positions
    const refPositions = new Set();
    for (let i = 0; i < refPixels.length; i += 4) {
      const refAlpha = refPixels[i + 3];
      if (refAlpha > 100) { // Only solid reference pixels
        refDrawnPixels++;
        const pixelIndex = i / 4;
        const y = Math.floor(pixelIndex / userCanvas.width);
        const x = pixelIndex % userCanvas.width;
        refPositions.add(`${x},${y}`);
      }
    }
    
    // Second pass: check user pixels
    for (let i = 0; i < userPixels.length; i += 4) {
      const userAlpha = userPixels[i + 3];
      
      if (userAlpha > 50) {
        userDrawnPixels++;
        
        // Check if this user pixel is near any reference pixel
        const pixelIndex = i / 4;
        const userY = Math.floor(pixelIndex / userCanvas.width);
        const userX = pixelIndex % userCanvas.width;
        
        // Check within tolerance radius
        let foundMatch = false;
        for (let dy = -toleranceRadius; dy <= toleranceRadius && !foundMatch; dy++) {
          for (let dx = -toleranceRadius; dx <= toleranceRadius && !foundMatch; dx++) {
            const checkX = userX + dx;
            const checkY = userY + dy;
            if (refPositions.has(`${checkX},${checkY}`)) {
              nearMatchPixels++;
              foundMatch = true;
            }
          }
        }
      }
    }
    
    // Calculate scores
    if (userDrawnPixels === 0) {
      return { score: 0, message: 'Please draw something', overlapRatio: 0, coverageRatio: 0, hasReasonableStrokes: false };
    }
    
    if (refDrawnPixels === 0) {
      return { score: 0, message: 'Reference error', overlapRatio: 0, coverageRatio: 0, hasReasonableStrokes: false };
    }
    
    // How much of user's drawing is near the reference (accuracy)
    const accuracyRatio = nearMatchPixels / userDrawnPixels;
    
    // How much of reference is covered by user's drawing (completeness)
    const completenessRatio = nearMatchPixels / refDrawnPixels;
    
    // Combined score (favor accuracy but also require completeness)
    const score = (accuracyRatio * 0.5 + completenessRatio * 0.5) * 100;
    
    // Stroke validation
    const hasReasonableStrokes = strokeCount >= 1;
    
    // Generate message
    let message = '';
    if (score >= 50 && hasReasonableStrokes) {
      message = 'Great job! Good match!';
    } else if (score >= 30) {
      message = 'Good attempt! Try to follow the shape more closely.';
    } else if (score >= 15) {
      message = 'Keep practicing! Trace over the gray character.';
    } else {
      message = 'Try again! Make sure to draw over the character guide.';
    }
    
    if (!hasReasonableStrokes) {
      message += ' Draw more strokes.';
    }
    
    return { 
      score: Math.round(score), 
      message,
      overlapRatio: Math.round(accuracyRatio * 100),
      coverageRatio: Math.round(completenessRatio * 100),
      hasReasonableStrokes,
      debug: {
        userPixels: userDrawnPixels,
        refPixels: refDrawnPixels,
        nearMatches: nearMatchPixels
      }
    };
  };

  const validateDrawing = () => {
    if (!hasDrawn) return false;
    
    const result = compareDrawings();
    setValidationResult(result);
    
    // Require at least 30% match to pass (more lenient)
    return result.score >= 30 && strokeCount >= 1;
  };

  const handleCheckWork = () => {
    if (!hasDrawn) {
      toast.error('Please draw the character first');
      return;
    }
    
    const result = compareDrawings();
    setValidationResult(result);
    setShowComparison(true);
    
    // Debug logging
    console.log('Validation Result:', result);
    console.log('User pixels:', result.debug?.userPixels);
    console.log('Reference pixels:', result.debug?.refPixels);
    console.log('Near matches:', result.debug?.nearMatches);
    
    if (result.score >= 50) {
      toast.success(result.message);
    } else if (result.score >= 30) {
      toast.info(result.message);
    } else {
      toast.warning(result.message);
    }
  };

  const handleComplete = () => {
    if (!hasDrawn) {
      toast.error('Please draw the character before continuing');
      return;
    }
    
    const isValid = validateDrawing();
    
    if (!isValid) {
      toast.error(validationResult?.message || 'Please make a better attempt at writing the character');
      return;
    }
    
    if (onComplete) {
      onComplete();
    }
  };

  return (
    <div className="space-y-4">
      <Card className="border-2 border-blue-200 bg-white overflow-hidden">
        <CardContent className="p-6">
          <div className="text-center mb-4">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Practice Writing: <span className="text-4xl font-bold text-blue-600">{character}</span>
            </h3>
            <p className="text-sm text-gray-600">
              Trace or draw the character in the canvas below
            </p>
            {strokeCount > 0 && (
              <Badge variant="outline" className="mt-2">
                Strokes: {strokeCount}
              </Badge>
            )}
          </div>
          
          <div className="flex justify-center gap-4 mb-4">
            {/* User Drawing Canvas */}
            <div className="relative">
              <div className="text-xs text-center mb-1 font-medium text-gray-700">Your Drawing</div>
              <canvas
                ref={canvasRef}
                width={400}
                height={400}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseLeave={stopDrawing}
                onTouchStart={startDrawing}
                onTouchMove={draw}
                onTouchEnd={stopDrawing}
                className="border-4 border-gray-300 rounded-lg cursor-crosshair bg-white shadow-inner touch-none"
                data-testid="drawing-canvas"
                style={{ touchAction: 'none' }}
              />
              
              {/* Grid overlay */}
              <div className="absolute inset-0 top-6 pointer-events-none">
                <svg width="400" height="400" className="opacity-20">
                  <line x1="200" y1="0" x2="200" y2="400" stroke="#9ca3af" strokeWidth="1" strokeDasharray="5,5"/>
                  <line x1="0" y1="200" x2="400" y2="200" stroke="#9ca3af" strokeWidth="1" strokeDasharray="5,5"/>
                </svg>
              </div>
            </div>
            
            {/* Comparison Canvas (hidden reference) */}
            {showComparison && (
              <div className="relative">
                <div className="text-xs text-center mb-1 font-medium text-gray-700">Reference</div>
                <canvas
                  ref={compareCanvasRef}
                  width={400}
                  height={400}
                  className="border-4 border-green-300 rounded-lg bg-white shadow-inner"
                  style={{ display: showComparison ? 'block' : 'none' }}
                />
              </div>
            )}
            <canvas
              ref={compareCanvasRef}
              width={400}
              height={400}
              style={{ display: 'none' }}
            />
          </div>
          
          {/* Validation Result */}
          {validationResult && (
            <Card className={`mb-4 border-2 ${
              validationResult.score >= 50 ? 'border-green-300 bg-green-50' :
              validationResult.score >= 30 ? 'border-yellow-300 bg-yellow-50' :
              'border-red-300 bg-red-50'
            }`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">Accuracy Score:</span>
                  <Badge className={
                    validationResult.score >= 50 ? 'bg-green-600' :
                    validationResult.score >= 30 ? 'bg-yellow-600' :
                    'bg-red-600'
                  }>
                    {validationResult.score}%
                  </Badge>
                </div>
                <p className="text-sm text-gray-700 mb-2">{validationResult.message}</p>
                <div className="grid grid-cols-2 gap-2 text-xs text-gray-600">
                  <div>Accuracy: {validationResult.overlapRatio}%</div>
                  <div>Completeness: {validationResult.coverageRatio}%</div>
                </div>
                {validationResult.score >= 30 && (
                  <div className="mt-2 text-xs text-green-700 font-medium">
                    ✓ Good enough to continue!
                  </div>
                )}
              </CardContent>
            </Card>
          )}
          
          <div className="flex justify-center space-x-3">
            <Button
              variant="outline"
              onClick={clearCanvas}
              data-testid="clear-canvas"
              className="flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Clear</span>
            </Button>
            
            <Button
              variant="outline"
              onClick={handleCheckWork}
              disabled={!hasDrawn}
              data-testid="check-work"
              className="flex items-center space-x-2"
            >
              {showComparison ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>Check My Work</span>
            </Button>
            
            <Button
              onClick={handleComplete}
              disabled={!hasDrawn}
              data-testid="done-drawing"
              className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 flex items-center space-x-2"
            >
              <Check className="w-4 h-4" />
              <span>Done</span>
            </Button>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center space-y-1">
        <p className="text-sm text-gray-500">
          💡 <strong>Tip:</strong> Trace over the light gray character guide for best results!
        </p>
        <p className="text-xs text-gray-500">
          Click "Check My Work" to see your score (requires 30%+ accuracy to continue)
        </p>
      </div>
    </div>
  );
};

export default DrawingCanvas;