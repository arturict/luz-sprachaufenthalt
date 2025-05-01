export interface Translation {
  title: string;
  intro: string;
  message: string;
  moments: Array<{
    title: string;
    description: string;
  }>;
  fromArtur: string;
  fromYannick: string;
  accessibility: {
    increaseText: string;
    decreaseText: string;
    readText: string;
    languageSwitch: string;
  };
}