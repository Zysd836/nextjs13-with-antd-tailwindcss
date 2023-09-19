'use client'

import { useTranslations } from 'next-intl'

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  const t = useTranslations()
  return (
    <html lang={t('error.tryAgain')}>
      <body>
        <h2>Something went wrong!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}
