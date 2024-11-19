import { FC, ReactElement, createContext } from 'react'

import { Language } from '@/layers/shared/types'

export const LanguageContext = createContext<Language>('ru')

interface Props {
    lang: Language
    children: ReactElement
}

export const LanguageProvider: FC<Props> = ({ children, lang }) => {
    return (
        <LanguageContext.Provider value={lang}>
            {children}
        </LanguageContext.Provider>
    )
}
