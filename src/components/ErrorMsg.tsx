import { FiAlertTriangle } from "react-icons/fi";
interface ErrorMsgProps {
  children: React.ReactNode;
}

const ErrorMsg: React.FC<ErrorMsgProps> = ({ children }) => {
  return (
    <p className="absolute -bottom-[18px] left-1 text-red-600 text-sm font-semibold flex items-center gap-x-1">
      <FiAlertTriangle size={13} />
      <span>{children}</span>
    </p>
  );
};
export default ErrorMsg;
