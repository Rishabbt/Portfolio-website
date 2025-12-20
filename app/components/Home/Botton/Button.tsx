import { BiDownload } from "react-icons/bi";
type ButtonSize = "sm" | "md" | "lg";

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-3.5 text-base",
};


type DownloadButtonProps = {
  size?: ButtonSize;
  label?: string;
  onClick?: () => void;
};

export default function DownloadButton({
  size = "md",
  label = "Download CV",
  onClick,
}: DownloadButtonProps): JSX.Element {
  return (
    <button
      onClick={onClick}
      className={`
        cursor-pointer
        rounded-lg
        bg-blue-700
        text-white
        transition-all
        duration-300
        hover:bg-blue-900
        flex
        items-center
        space-x-2
        ${sizeClasses[size]}
      `}
    >
      <BiDownload className="w-5 h-5" />
      <span>{label}</span>
    </button>
  );
}
