import { useTranslations } from 'next-intl'

export default function Page() {
  const t = useTranslations('site')

  return (
    <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
      <h1 className="text-center text-4xl font-extrabold !leading-tight tracking-tighter">
        {t('desc')}
      </h1>
    </section>
  )
}
