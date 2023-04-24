'use client'

import { PropsWithChildren, useEffect, useState } from 'react'

import { ConfigProvider, theme } from 'antd'
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes'

import { defaultLocale, languages } from '@/i18n'

import { AntdProvider } from './AntdProvider'

export type ProviderProps = PropsWithChildren<{
  locale: string;
}>;

export function AntdConfigProvider({ children, locale }: ProviderProps) {
  const { theme: nowTheme } = useTheme()

  return (
    <ConfigProvider
      locale={(languages as any)[(locale as any) ?? defaultLocale].antd}
      theme={{
        algorithm:
          nowTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <AntdProvider>{children}</AntdProvider>
    </ConfigProvider>
  )
}

export default function Providers(props: ProviderProps) {
  const [mounted, setMounted] = useState(false)

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // use your loading page
    return <div className="hidden">{props.children}</div>
  }

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <AntdConfigProvider {...props} />
    </NextThemeProvider>
  )
}
