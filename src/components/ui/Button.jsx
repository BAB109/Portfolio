/**
 * Reusable Button component for consistent actions, links, and forms across the portfolio.
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  icon: Icon,
  iconPosition = 'right',
  ...props
}) {
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#48E6C1] active:scale-[0.98] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary:
      'bg-[#48E6C1] text-[#0B172B] font-semibold hover:bg-[#2BCFA9] hover:shadow-[0_0_20px_rgba(72,230,193,0.35)]',
    outline:
      'border border-[#48E6C1]/40 bg-[#48E6C1]/5 text-[#F1F5F9] hover:border-[#48E6C1] hover:text-[#48E6C1] hover:bg-[#48E6C1]/10',
    ghost:
      'text-[#94A3B8] hover:text-[#F1F5F9] hover:bg-white/5',
    card:
      'bg-[#101D32] border border-[rgba(148,163,184,0.15)] text-[#F1F5F9] hover:border-[#48E6C1]/50 hover:text-[#48E6C1]',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-5 py-2.5 gap-2',
    lg: 'text-base px-6 py-3.5 gap-2.5',
  };

  const classes = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  const content = (
    <>
      {Icon && iconPosition === 'left' && <Icon className="w-4 h-4" />}
      <span>{children}</span>
      {Icon && iconPosition === 'right' && <Icon className="w-4 h-4" />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http') || href.endsWith('.pdf');
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
