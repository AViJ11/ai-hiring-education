'use client'

import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface CheckboxProps {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
}

export function Checkbox({ checked, onCheckedChange, className }: CheckboxProps) {
  return (
    <button
      role="checkbox"
      aria-checked={checked}
      type="button"
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        'h-4 w-4 shrink-0 rounded border transition-colors flex items-center justify-center',
        checked
          ? 'bg-primary border-primary'
          : 'bg-transparent border-border/50 hover:border-primary/50',
        className
      )}
    >
      {checked && <Check size={10} className="text-primary-foreground" strokeWidth={3} />}
    </button>
  )
}
