import React from 'react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const isPremium = localStorage.getItem('talkflow_premium') === 'true';

  const plans = [
    {
      name: 'Monthly',
      price: '$9.99',
      period: 'per month',
      features: [
        'All 7 languages unlocked',
        '133+ lessons total',
        'Premium lesson access',
        'Unlimited practice',
        'Cancel anytime'
      ],
      gumroadLink: 'https://yourname.gumroad.com/l/talkflow-monthly',
      licenseKey: 'PMuKJiIjmAaCLm8d4KwcaA=='
    },
    {
      name: 'Annual',
      price: '$49',
      period: 'per year',
      originalPrice: '$119.88',
      savings: 'Save 59%',
      popular: true,
      features: [
        'All 7 languages unlocked',
        '133+ lessons total',
        'Premium lesson access',
        'Unlimited practice',
        'Best value - 2 months free'
      ],
      gumroadLink: 'https://yourname.gumroad.com/l/talkflow-annual',
      licenseKey: 'GRFRs0-4DiRMOnKFfQXF8Q=='
    }
  ];

  const handlePurchase = (plan) => {
    // Redirect to Gumroad or activate page
    if (plan.gumroadLink && !plan.gumroadLink.includes('yourname')) {
      window.open(plan.gumroadLink, '_blank');
    } else {
      // For testing, go directly to activate page
      navigate(`/activate?key=${plan.licenseKey}`);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>TalkFlow Premium</h1>
        <p style={styles.subtitle}>Unlock all languages and premium lessons</p>
        {isPremium && (
          <div style={styles.premiumBadge}>
            ✓ You have active premium access
          </div>
        )}
      </div>

      <div style={styles.plansContainer}>
        {plans.map((plan, index) => (
          <div
            key={index}
            style={{
              ...styles.planCard,
              ...(plan.popular ? styles.popularCard : {})
            }}
          >
            {plan.popular && (
              <div style={styles.popularBadge}>Most Popular</div>
            )}
            
            <h2 style={styles.planName}>{plan.name}</h2>
            
            <div style={styles.priceContainer}>
              <span style={styles.price}>{plan.price}</span>
              <span style={styles.period}>/{plan.period}</span>
            </div>

            {plan.originalPrice && (
              <div style={styles.savings}>
                <span style={styles.originalPrice}>{plan.originalPrice}</span>
                <span style={styles.savingsText}>{plan.savings}</span>
              </div>
            )}

            <ul style={styles.featuresList}>
              {plan.features.map((feature, i) => (
                <li key={i} style={styles.feature}>
                  <span style={styles.checkmark}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              onClick={() => handlePurchase(plan)}
              style={{
                ...styles.button,
                ...(plan.popular ? styles.popularButton : {})
              }}
            >
              {isPremium ? 'Already Active' : `Get ${plan.name} Plan`}
            </button>

            {!isPremium && (
              <button
                onClick={() => navigate(`/activate?key=${plan.licenseKey}`)}
                style={styles.testButton}
              >
                Test with License Key
              </button>
            )}
          </div>
        ))}
      </div>

      <div style={styles.footer}>
        <p style={styles.footerText}>
          After purchase, you'll receive a license key via email. 
          Enter it on the <a href="/activate" style={styles.link}>Activate</a> page to unlock premium features.
        </p>
        <p style={styles.footerText}>
          Questions? Contact support or visit our{' '}
          <a href="/activate" style={styles.link}>activation page</a>.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    padding: '40px 20px',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    color: 'white'
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: 'white'
  },
  subtitle: {
    fontSize: '20px',
    opacity: 0.9,
    marginBottom: '20px'
  },
  premiumBadge: {
    display: 'inline-block',
    padding: '8px 16px',
    backgroundColor: '#10b981',
    color: 'white',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '600',
    marginTop: '12px'
  },
  plansContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  planCard: {
    backgroundColor: 'white',
    borderRadius: '16px',
    padding: '40px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column'
  },
  popularCard: {
    border: '3px solid #fbbf24',
    transform: 'scale(1.05)'
  },
  popularBadge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#fbbf24',
    color: '#111827',
    padding: '6px 20px',
    borderRadius: '20px',
    fontSize: '12px',
    fontWeight: 'bold'
  },
  planName: {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#111827'
  },
  priceContainer: {
    marginBottom: '12px'
  },
  price: {
    fontSize: '48px',
    fontWeight: 'bold',
    color: '#111827'
  },
  period: {
    fontSize: '18px',
    color: '#6b7280',
    marginLeft: '8px'
  },
  savings: {
    marginBottom: '24px'
  },
  originalPrice: {
    textDecoration: 'line-through',
    color: '#9ca3af',
    fontSize: '18px',
    marginRight: '12px'
  },
  savingsText: {
    color: '#10b981',
    fontWeight: '600',
    fontSize: '16px'
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: '24px 0',
    flex: 1
  },
  feature: {
    padding: '12px 0',
    fontSize: '16px',
    color: '#374151',
    display: 'flex',
    alignItems: 'center'
  },
  checkmark: {
    color: '#10b981',
    fontWeight: 'bold',
    marginRight: '12px',
    fontSize: '20px'
  },
  button: {
    width: '100%',
    padding: '16px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: '#6366f1',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    marginTop: 'auto'
  },
  popularButton: {
    backgroundColor: '#fbbf24',
    color: '#111827'
  },
  testButton: {
    width: '100%',
    padding: '12px',
    fontSize: '14px',
    color: '#6366f1',
    backgroundColor: 'transparent',
    border: '1px solid #6366f1',
    borderRadius: '8px',
    cursor: 'pointer',
    marginTop: '12px',
    transition: 'all 0.2s'
  },
  footer: {
    textAlign: 'center',
    marginTop: '60px',
    color: 'white',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  footerText: {
    fontSize: '16px',
    opacity: 0.9,
    marginBottom: '12px',
    lineHeight: '1.6'
  },
  link: {
    color: '#fbbf24',
    textDecoration: 'underline',
    fontWeight: '600'
  }
};

export default Pricing;
