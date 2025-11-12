import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { pageVariants } from '@/shared/animations'

export function NewsletterForm() {
  const shouldReduceMotion = useReducedMotion()
  const [isSubmitting, setIsSubmitting] = React.useState(false)

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

  return (
    <motion.div
      className="mx-auto max-w-[820px] px-4 pt-10 pb-6 border-t border-[color:var(--color-border-subtle)]"
      initial={shouldReduceMotion ? undefined : 'initial'}
      animate={shouldReduceMotion ? undefined : 'enter'}
      variants={pageVariants}
    >
            <form
        action="https://app.kit.com/forms/8765360/subscriptions"
        className="seva-form formkit-form"
        method="post"
        data-sv-form="8765360"
        data-uid="b123898ec9"
        data-format="inline"
        data-version="5"
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
              className="formkit-input w-full h-9 px-3 py-2 text-sm bg-[color:var(--color-surface)] text-[color:var(--color-text-primary)] border border-[color:var(--color-border-muted)] rounded focus:outline-none focus:ring-2 focus:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-bg)] placeholder:text-[color:var(--color-text-muted)] transition-colors"
              name="email_address"
              aria-label="Email Address"
              placeholder="Enter your email to get updates on new articles and projects."
              required
              type="email"
            />
          </div>
          <button
            data-element="submit"
            className="formkit-submit h-9 px-5 py-2 text-sm bg-white text-black font-medium rounded hover:bg-[color:var(--color-text-primary)] focus:outline-none focus:ring-2 focus:ring-[color:var(--color-focus-ring)] ring-offset-2 ring-offset-[color:var(--color-bg)] transition-colors relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
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
      `}</style>
    </motion.div>
  )
}
