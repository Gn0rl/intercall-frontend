import { useContext } from 'react'

import { dictionary } from '@/layers/shared/languages'
import { Language } from '@/layers/shared/types'

import { LanguageContext } from '../providers'

export function useTranslate() {
    const lang: Language = useContext(LanguageContext)

    return (key: string, params?: Record<string, string | number>) => {
        const dictionaryItem = dictionary[lang][key]
        if (dictionaryItem && params) {
            return dictionaryItem.replace(/{(\w+)}/g, (match, p1) =>
                String(params[p1])
            )
        }
        return dictionaryItem || key
    }
    //return (key: string) => dictionary[lang][key];
}
