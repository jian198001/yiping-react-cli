// @ts-nocheck
// This file is generated by Umi automatically
// DO NOT CHANGE IT MANUALLY!
import React from 'react';
import { ConfigProvider } from 'antd';

import moment from '/Users/macmini/Desktop/workSpace/y/yiping-react-cli/node_modules/dayjs';
import '/Users/macmini/Desktop/workSpace/y/yiping-react-cli/node_modules/dayjs/locale/bn-bd';
import '/Users/macmini/Desktop/workSpace/y/yiping-react-cli/node_modules/dayjs/locale/en';
import '/Users/macmini/Desktop/workSpace/y/yiping-react-cli/node_modules/dayjs/locale/fa';
import '/Users/macmini/Desktop/workSpace/y/yiping-react-cli/node_modules/dayjs/locale/id';
import '/Users/macmini/Desktop/workSpace/y/yiping-react-cli/node_modules/dayjs/locale/ja';
import '/Users/macmini/Desktop/workSpace/y/yiping-react-cli/node_modules/dayjs/locale/pt-br';
import '/Users/macmini/Desktop/workSpace/y/yiping-react-cli/node_modules/dayjs/locale/zh-cn';
import '/Users/macmini/Desktop/workSpace/y/yiping-react-cli/node_modules/dayjs/locale/zh-tw';
import { RawIntlProvider, getLocale, getDirection , setIntl, getIntl, localeInfo, event, LANG_CHANGE_EVENT } from './localeExports';




export function _onCreate() {
  const locale = getLocale();
  if (moment?.locale) {
    moment.locale(localeInfo[locale]?.momentLocale || '');
  }
  setIntl(locale);
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  typeof window.document.createElement !== 'undefined'
    ? React.useLayoutEffect
    : React.useEffect

export const _LocaleContainer = (props:any) => {
    const initLocale = getLocale();
    const [locale, setLocale] = React.useState(initLocale);
  const [intl, setContainerIntl] = React.useState(() => getIntl(locale, true));

  const handleLangChange = (locale:string) => {
    if (moment?.locale) {
      moment.locale(localeInfo[locale]?.momentLocale || 'en');
    }
    setLocale(locale);
    setContainerIntl(getIntl(locale));
  };

  useIsomorphicLayoutEffect(() => {
    event.on(LANG_CHANGE_EVENT, handleLangChange);
    return () => {
      event.off(LANG_CHANGE_EVENT, handleLangChange);
    };
  }, []);

  const defaultAntdLocale = {
  }
  const direction = getDirection();

  return (
    <ConfigProvider  direction={direction} locale={localeInfo[locale]?.antd || defaultAntdLocale}>
      <RawIntlProvider value={intl}>{props.children}</RawIntlProvider>
    </ConfigProvider>
  )
};
