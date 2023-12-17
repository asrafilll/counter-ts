'use client';

import { tv, type VariantProps } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const buttonStyle = tv({
  base: 'px-8 py-2 rounded-full font-medium',
  variants: {
    variant: {
      primary: 'bg-primary-500 text-white',
      secondary: 'bg-secondary-300 text-secondary-800',
      bordered: 'border-[1px] border-secondary-800 text-secondary-800',
      danger: 'bg-red-400 text-white',
    },
    size: {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

type ButtonVarianProps = VariantProps<typeof buttonStyle>;
type ButtonNativeProps = React.HTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ButtonNativeProps, ButtonVarianProps {
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button className={twMerge(buttonStyle(props), className)} {...props}>
      {props.children}
    </button>
  );
};
