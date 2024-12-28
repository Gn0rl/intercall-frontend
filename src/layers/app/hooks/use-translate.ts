import { useContext } from 'react'

import { dictionary } from '@/layers/shared/languages'

import { LanguageContext } from '../providers'

export function useTranslate() {
    const lang = useContext(LanguageContext)
    const localeDictionary = dictionary[lang]

    return (key: string, params?: Record<string, string | number>) => {
        const dictionaryItem = localeDictionary?.[key]
        if (dictionaryItem && params) {
            return dictionaryItem.replace(/{(\w+)}/g, (_, p1) =>
                String(params[p1])
            )
        }
        return dictionaryItem ?? key
    }
}
