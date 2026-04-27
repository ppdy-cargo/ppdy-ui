import { twMerge } from 'tailwind-merge'
import type { ButtonProps } from './button.types'
import React from 'react'

const sizeStyles = {
  xl: 'py-3 px-5',
  lg: 'py-2.5 px-4.5',
  xs: 'py-1 px-2.5 text-xs',
  sm: 'py-2 px-3.5 text-sm',
  md: 'py-2.5 px-4 text-sm',
  xxs: 'py-0.5 px-2.5 text-sm',
}

const variantStyles = {
  base: 'bg-[#2A457E] border-[1.5px] border-[#2A457E] text-white font-semibold hover:bg-[#243E75] hover:text-gray-100 active:bg-[#1F386E] active:text-gray-200',
  outline:
    'bg-white border border-[#2A457E] text-[#2A457E] font-semibold hover:text-[#243E75] hover:bg-[#F0F0F0] active:bg-[#E0E0E0] active:text-[#1F386E]',
  danger:
    'border-[1.5px] bg-[#FFCBC9] border-[#FFCBC9] text-[#ED0002] font-medium',
  success:
    'bg-[#E9FDF1] border-[1.5px] border-[#E9FDF1] text-[#0C6136] font-semibold',
  blank:
    'bg-[#FCFCFD] border-[1px] border-[#E9E9E9] text-[#2A457E] font-semibold',
}

const disabledStyles =
  'bg-[#F0F1F3] border-[#F0F1F3] text-[#8292AA] cursor-not-allowed opacity-60 hover:bg-[#F0F1F3] hover:text-[#8292AA] active:bg-[#F0F1F3] active:text-[#8292AA]'

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'base', size = 'md', children, disabled, className, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={twMerge(
          'cursor-pointer rounded-lg',
          sizeStyles[size],
          variantStyles[variant],
          disabled ? disabledStyles : variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
