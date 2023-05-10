import { useTranslations } from 'next-intl'
import React from 'react'

type Props = {
	children: React.ReactNode;
};
const DemoLayout: React.FC<Props> = ({ children }) => {
  const t = useTranslations()
  // insert html tag and body tag to ignore root layout
  return (
    <div>
      <div>
        {t('error.tryAgain')}
        <div>Layout demo</div>
        {children}
      </div>
    </div>
  )
}

export default DemoLayout
