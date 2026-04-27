import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'base' | 'outline' | 'danger' | 'success' | 'blank'
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
  children?: ReactNode
}
