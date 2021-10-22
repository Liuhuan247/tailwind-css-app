import classNames from 'clsx';

const rootClassName = 'by-button';

export interface IByButtonProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  type?: 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';
}

const Button: React.FC<IByButtonProps> = ({
  children,
  onClick,
  type,
  className: clsName,
}) => {
  const className = classNames(
    rootClassName,
    clsName,
    [
      'bg-primary text-white dark:text-black rounded py-px px-1.5 text-sm hover:bg-opacity-80',
    ],
    {
      [`btn-${type}`]: type,
    }
  );
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
  };
  return (
    <button type="button" className={className} onClick={handleClick}>
      {children}
    </button>
  );
};
export default Button;
