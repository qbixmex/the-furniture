import clsx from "clsx";

const Button: React.FC<{
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({
  children,
  className = '',
  style = {},
}) => {
  return (
    <button
      className={clsx([
        "bg-neutral-800 hover:bg-neutral-600 text-neutral-50 p-4 py-2 rounded uppercase font-medium transition-colors duration-300",
        className
      ])}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;