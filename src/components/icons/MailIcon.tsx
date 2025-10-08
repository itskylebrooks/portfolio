import React from 'react'
import { Mail } from 'lucide-react'

export function MailIcon({ className = '' }: { className?: string }) {
  return <Mail className={className} aria-hidden />
}
