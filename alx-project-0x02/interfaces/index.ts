export interface BasicInterface {
  id: number;
  name: string;
}

export interface HomePageProps {
  title: string;
  description: string;
}

export interface AboutPageProps {
  teamMembers: string[];
  missionStatement: string;
}
export interface CardProps {
  title: string;
  content: string;
  imageSrc: string; // 👈 New image prop
  imageAlt?: string; // Optional alt text
}
