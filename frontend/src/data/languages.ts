export type TalkFlowLanguage = {
  code: string;
  name: string;
  totalLessons: number;
  totalVocab: number;
  freeLessons: number;
  premiumLessons: number;
};

export const languages: TalkFlowLanguage[] = [
  { code: "ja", name: "Japanese", totalLessons: 19, totalVocab: 200, freeLessons: 5, premiumLessons: 14 },
  { code: "es", name: "Spanish",  totalLessons: 19, totalVocab: 200, freeLessons: 5, premiumLessons: 14 },
  { code: "fr", name: "French",   totalLessons: 19, totalVocab: 200, freeLessons: 5, premiumLessons: 14 },
  { code: "de", name: "German",   totalLessons: 19, totalVocab: 200, freeLessons: 5, premiumLessons: 14 },
  { code: "zh", name: "Chinese",  totalLessons: 19, totalVocab: 190, freeLessons: 5, premiumLessons: 14 },
  { code: "ru", name: "Russian",  totalLessons: 19, totalVocab: 190, freeLessons: 5, premiumLessons: 14 },
  { code: "ar", name: "Arabic",   totalLessons: 19, totalVocab: 190, freeLessons: 5, premiumLessons: 14 },
];

