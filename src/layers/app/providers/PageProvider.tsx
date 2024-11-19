import { FC, ReactElement } from 'react'

import { Language } from '@/layers/shared/types'

import { LanguageProvider } from './LanguageProvider'
import { ThemeProvider } from './ThemeProvider'

interface Props {
    children: ReactElement
    lang: Language
}

export const PageProvider: FC<Props> = ({ children, lang }) => {
    return (
        <ThemeProvider>
            <LanguageProvider lang={lang}>{children}</LanguageProvider>
        </ThemeProvider>
    )
}
