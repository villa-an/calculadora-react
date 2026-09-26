type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
};

const Button = ({ label, onClick, className, ariaLabel }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`calc-key ${className ?? ""}`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
