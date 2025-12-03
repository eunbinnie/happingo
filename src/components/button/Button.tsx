import React, { PropsWithChildren } from 'react';

import { cn } from '@/lib/cn';

type ButtonVariant = 'default' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    PropsWithChildren {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const base =
  'dark:text-text/60 py-0.5 px-1 transition-colors rounded-md duration-300';

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'text-2xs sm:text-xs',
  md: 'text-xs sm:text-sm',
};

const variantClasses: Record<ButtonVariant, string> = {
  default: 'bg-text/80 hover:bg-text text-background dark:text-background',
  outline:
    'hover:bg-gray-200 border-text/25 border shadow-xs dark:hover:bg-gray-100/50',
  ghost: 'hover:bg-gray-200 dark:hover:bg-gray-100/50',
};

const Button = ({
  type = 'button',
  children,
  variant = 'default',
  size = 'md',
  onClick,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(base, sizeClasses[size], variantClasses[variant])}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
