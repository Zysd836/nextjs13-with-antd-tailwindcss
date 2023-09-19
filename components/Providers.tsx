'use client'

import { AntdProvider } from './AntdProvider'
import { defaultLocale, languages } from '@/i18n'
import { ConfigProvider, theme } from 'antd'
import { ThemeProvider as NextThemeProvider, useTheme } from 'next-themes'
import { PropsWithChildren } from 'react'

export type ProviderProps = PropsWithChildren<{
  locale: string
}>

export function AntdConfigProvider({ children, locale }: ProviderProps) {
  const { theme: nowTheme } = useTheme()

  return (
    <ConfigProvider
      prefixCls="ant"
      iconPrefixCls="anticon"
      locale={(languages as any)[(locale as any) ?? defaultLocale].antd}
      theme={{
        algorithm: nowTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <AntdProvider>{children}</AntdProvider>
    </ConfigProvider>
  )
}

export default function Providers(props: ProviderProps) {
  // use code below can not prerender html
  // const [mounted, setMounted] = useState(false)

  // // useEffect only runs on the client, so now we can safely show the UI
  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // if (!mounted) {
  //   // use your loading page
  //   return <div className="h-[100vh] w-full flex justify-center items-center bg-slate-300"><Spin /></div>
  // }

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
