import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ size, shape, children, onClick }) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  const className = `bg-blue-400 text-white ${sizeClasses[size]} ${shape} hover:bg-blue-700 transition`;

  return (
    <button className={className} onClick={onClick} type="button">
      {children}
    </button>
  );
};
export default Button;
