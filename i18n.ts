import { Locale } from 'antd/lib/locale';
import en_US from 'antd/locale/en_US';
import vi_VN from 'antd/locale/vi_VN';
import { getRequestConfig } from 'next-intl/server';

export const languages = {
	'vi-VN': {
		name: 'Vietnamese',
		flag: 'vn',
		antd: vi_VN,
	},
	'en-US': { name: 'English', flag: '🇺🇸', antd: en_US },
};

export type ILanguage = {
	[K in keyof typeof languages]: {
		name: string;
		flag: string;
		unicode: string;
		antd: Locale;
	};
};

export const defaultLocale: keyof typeof languages = 'en-US';

export default getRequestConfig(async ({ locale }) => ({
	messages: (await import(`./locales/${locale}.json`)).default,
}));
