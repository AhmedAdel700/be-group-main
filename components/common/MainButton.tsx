interface MainButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttontype?: 'primary' | 'secondary' | 'black';
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  className?: string;
}

export default function MainButton({
  children,
  buttontype = 'primary',
  iconStart,
  iconEnd,
  className = '',
  ...props
}: MainButtonProps) {
  
  const variantClasses = {
    primary: 'btn-main',
    secondary: 'btn-secondary',
    black: 'btn-black',
  };

  const selectedVariant = variantClasses[buttontype] || variantClasses.primary;

  return (
    <button 
      className={`${selectedVariant} ${className}`}
      {...props}
    >
      {iconStart && (
        <span className="inline-flex items-center justify-center">
          {iconStart}
        </span>
      )}
      
      {children && <span>{children}</span>}
      
      {iconEnd && (
        <span className="inline-flex items-center justify-center">
          {iconEnd}
        </span>
      )}
    </button>
  );
}
