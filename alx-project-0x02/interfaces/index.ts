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