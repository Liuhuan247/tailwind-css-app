interface IButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<IButtonProps> = ({ children, onClick }) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
  };
  return (
    <button
      type="button"
      className="bg-primary text-white dark:text-black rounded py-px px-1.5 text-sm hover:bg-opacity-80"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
export default Button;
