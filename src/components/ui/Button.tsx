import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: 'default' | 'outline' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      asChild = false,
      children,
      style,
      ...props
    },
    ref
  ) => {
    if (variant === 'outline') {
      let padding = 'px-[59px] py-[15px] rounded-[10px]';
      let textClass = 'text-[#e9f4f9] text-[15px]';
      let borderRounding = 'rounded-[10px]';

      if (size === 'sm') {
        padding = 'px-[37px] py-[5px] rounded-[6px]';
        textClass = 'text-[#e9f4f9] text-[12px]';
        borderRounding = 'rounded-[6px]';
      }

      return (
        <button
          className={cn(
            `content-stretch flex items-center justify-center relative shrink-0 cursor-pointer ${padding}`,
            className
          )}
          ref={ref}
          style={style}
          {...props}
        >
          <div
            aria-hidden="true"
            className={`absolute border border-[#e9f4f9] border-solid inset-0 pointer-events-none ${borderRounding}`}
          />
          <p
            className={`[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 uppercase whitespace-nowrap ${textClass}`}
          >
            {children}
          </p>
        </button>
      );
    }

    if (variant === 'default') {
      let inlineStyle = style;
      if (!style?.backgroundImage) {
        inlineStyle = {
          ...style,
          backgroundImage:
            size === 'sm'
              ? 'linear-gradient(108.187deg, rgb(0, 180, 253) 5.6799%, rgb(0, 58, 206) 86.975%)'
              : 'linear-gradient(141.821deg, rgb(0, 180, 253) 5.6799%, rgb(0, 58, 206) 86.975%)',
        };
      }

      let padding = 'px-[51px] py-[15px] rounded-[10px]';
      let textClass = 'text-[15px] text-white';

      if (size === 'sm') {
        padding = 'px-[22px] py-[10px] rounded-[32px]';
        textClass = 'text-[#e9f4f9] text-[12px]';
      }

      return (
        <button
          className={cn(
            `content-stretch flex items-center justify-center relative shrink-0 cursor-pointer ${padding}`,
            className
          )}
          style={inlineStyle}
          ref={ref}
          {...props}
        >
          <p
            className={`[word-break:break-word] font-['Chivo_Mono_Medium:Regular',sans-serif] leading-[1.3] not-italic relative shrink-0 uppercase whitespace-nowrap ${textClass}`}
          >
            {children}
          </p>
        </button>
      );
    }

    return (
      <button className={className} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
