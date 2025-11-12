import React from 'react'
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion'
import { pageVariants } from '@/shared/animations'

export function NewsletterForm() {
  const shouldReduceMotion = useReducedMotion()
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [isMobile, setIsMobile] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  React.useEffect(() => {
    // Load ConvertKit script
    const script = document.createElement('script')
    script.src = 'https://f.convertkit.com/ckjs/ck.5.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  React.useEffect(() => {
    // Check if mobile on mount and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640) // sm breakpoint
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Advanced email validation with multiple heuristics
  const validateEmail = React.useCallback((value: string) => {
    const email = value.trim()
    if (!email) return { valid: false, reason: 'Email is required.' }

    // No spaces or control chars
    if (/\s/.test(email)) return { valid: false, reason: 'Email cannot contain spaces.' }

    const atIndex = email.indexOf('@')
    if (atIndex === -1 || atIndex !== email.lastIndexOf('@')) {
      return { valid: false, reason: 'Enter a valid email address.' }
    }

    const local = email.slice(0, atIndex)
    const domain = email.slice(atIndex + 1)

    if (!local || !domain) return { valid: false, reason: 'Enter a valid email address.' }

    // Local part rules
    if (local.length > 64) return { valid: false, reason: 'Local part is too long.' }
    if (local.startsWith('.') || local.endsWith('.')) return { valid: false, reason: 'Dots cannot start or end local part.' }
    if (local.includes('..')) return { valid: false, reason: 'Consecutive dots are not allowed.' }
    if (!/^[A-Za-z0-9!#$%&'*+\/=?^_`{|}~.-]+$/.test(local)) {
      return { valid: false, reason: 'Invalid characters in email.' }
    }

    // Domain rules
    if (domain.length > 255) return { valid: false, reason: 'Domain is too long.' }
    if (domain.startsWith('-') || domain.endsWith('-')) return { valid: false, reason: 'Invalid domain.' }
    if (domain.includes('..')) return { valid: false, reason: 'Invalid domain.' }
    const labels = domain.split('.')
    if (labels.length < 2) return { valid: false, reason: 'Domain must include a TLD.' }
    for (const label of labels) {
      if (!label) return { valid: false, reason: 'Invalid domain.' }
      if (!/^[A-Za-z0-9-]+$/.test(label)) return { valid: false, reason: 'Invalid domain.' }
      if (label.startsWith('-') || label.endsWith('-')) return { valid: false, reason: 'Invalid domain.' }
    }
    const tld = labels[labels.length - 1] ?? ''
    if (tld.length < 2 || !/^[A-Za-z]{2,63}$/.test(tld)) return { valid: false, reason: 'Invalid top-level domain.' }

    return { valid: true }
  }, [])

  // Auto-hide error after a short delay
  React.useEffect(() => {
    if (!error) return
    const id = setTimeout(() => setError(null), 4000)
    return () => clearTimeout(id)
  }, [error])

  return (
    <motion.div
      className="mx-auto max-w-[820px] px-4 pt-10 pb-6"
      initial={shouldReduceMotion ? undefined : 'initial'}
      animate={shouldReduceMotion ? undefined : 'enter'}
      variants={pageVariants}
    >
      <div className="relative">
            <form
        action="https://app.kit.com/forms/8765360/subscriptions"
        className="seva-form formkit-form"
        method="post"
        data-sv-form="8765360"
        data-uid="b123898ec9"
        data-format="inline"
        data-version="5"
        noValidate
        onSubmit={(e) => {
          const value = inputRef.current?.value ?? ''
          const result = validateEmail(value)
          if (!result.valid) {
            e.preventDefault()
            setError(result.reason || 'Enter a valid email address.')
            inputRef.current?.focus()
            return
          }
          setError(null)
        }}
      >
        {/* Error messages */}
        <ul
          className="formkit-alert formkit-alert-error hidden text-sm text-[color:var(--accent-red-text)] bg-[color:var(--accent-red-bg)] border border-[color:var(--accent-red-border)] rounded px-3 py-2 mb-3 text-center"
          data-element="errors"
          data-group="alert"
        ></ul>

        {/* Form fields */}
        <div
          data-element="fields"
          className="formkit-fields flex flex-col sm:flex-row gap-2 items-stretch"
        >
          <div className="formkit-field flex-1">
            <input
              className="formkit-input w-full h-9 px-3 py-2 text-sm bg-transparent text-[color:var(--color-text-primary)] border border-[color:var(--color-border-muted)] rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-focus-ring)] focus-visible:ring-offset-3 focus-visible:ring-offset-[color:var(--color-bg)] placeholder:text-[color:var(--color-text-tertiary)] transition-[border-color,box-shadow] duration-200 ease-in-out"
              name="email_address"
              aria-label="Email Address"
              placeholder={isMobile ? "Enter your email to get my newsletter." : "Enter your email to get updates on new articles and projects."}
              required
              type="email"
              maxLength={254}
              ref={inputRef}
              aria-invalid={error ? 'true' : 'false'}
              onInput={() => {
                if (error) setError(null)
              }}
            />
          </div>
          <button
            data-element="submit"
          className="formkit-submit h-9 px-5 py-2 text-sm bg-neutral-200 text-neutral-900 font-medium rounded hover:bg-neutral-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-bg)] transition-colors relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            type="submit"
          >
            {/* Loading spinner */}
            <div className="formkit-spinner absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-1.5 h-1.5 bg-black rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
            <span className="formkit-submit-text">Subscribe</span>
          </button>
        </div>
      </form>

      {/* Minimal popup above the form (no layout shift) */}
      <AnimatePresence>
        {error ? (
          <motion.div
            role="alert"
            aria-live="assertive"
            className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[calc(100%+8px)] z-50 rounded-lg border border-[color:var(--color-card-border)] bg-[color:var(--color-bg)] px-3 py-2 text-sm text-[color:var(--color-text-primary)] shadow-[0_2px_10px_rgba(0,0,0,0.35)]"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.18, ease: 'easeOut' }}
          >
            {error}
          </motion.div>
        ) : null}
      </AnimatePresence>
      </div>

      <style>{`
        /* ConvertKit form specific styles */
        .formkit-form[data-uid="b123898ec9"] * {
          box-sizing: border-box;
        }

        .formkit-form[data-uid="b123898ec9"] .formkit-alert:empty {
          display: none;
        }

        .formkit-form[data-uid="b123898ec9"] .formkit-alert:not(:empty) {
          display: block !important;
        }

        .formkit-form[data-uid="b123898ec9"] .formkit-alert-success {
          background-color: var(--accent-green-bg) !important;
          border-color: var(--accent-green-border) !important;
          color: var(--accent-green-text) !important;
        }

        .formkit-form[data-uid="b123898ec9"] .formkit-submit[data-active] .formkit-spinner {
          opacity: 1;
        }

        .formkit-form[data-uid="b123898ec9"] .formkit-submit[data-active] .formkit-submit-text {
          opacity: 0;
        }

        /* Hide ConvertKit branding */
        .formkit-powered-by-convertkit-container {
          display: none !important;
        }

        /* Prevent iOS zoom on focus by ensuring >=16px font size */
        .formkit-form[data-uid="b123898ec9"] .formkit-input {
          font-size: 16px; /* iOS no-zoom threshold */
          -webkit-text-size-adjust: 100%;
        }

        /* Center placeholder on small screens only */
        @media (max-width: 639px) {
          .formkit-form[data-uid="b123898ec9"] .formkit-input::placeholder {
            text-align: center;
          }
        }
      `}</style>
    </motion.div>
  )
}
