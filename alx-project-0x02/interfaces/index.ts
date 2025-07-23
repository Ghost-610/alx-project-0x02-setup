export interface BasicInterface {
  id: number;
  name: string;
}

export interface HomeProps {
  title: string;
  description: string;
}

export interface AboutProps {
  teamMembers: string[];
  missionStatement: string;
}
export interface CardProps {
  title: string;
  content: string;
}
export interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { title: string; content: string }) => void;
}

// Interface for post data
export interface PostData {
  userId: string;
  title: string;
  content: string;
  createdAt: Date;
}
export interface PostProps {
  posts: PostData[];
}

export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  onClick?: () => void;
}

export interface UserProps {
  id: number;
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipcode: string;
  };
}
