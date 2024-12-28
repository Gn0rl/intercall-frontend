'use client'

import cn from 'classnames'
import { FC, ReactElement } from 'react'

import { Language } from '@/layers/shared/types'
import { ThemeProvider, createTheme } from '@mui/material'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter'

import { LanguageProvider } from './LanguageProvider'

interface Props {
    children: ReactElement
    lang: Language
}

const theme = createTheme({
    defaultColorScheme: 'dark',
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    main: '#171717',
                },
                secondary: {
                    main: '#343a40',
                },
            },
        },
    },
})
theme.palette.mode = 'dark'

const { mode } = theme.palette

export const PageProvider: FC<Props> = ({ children, lang }) => {
    return (
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <div className={cn('root_' + mode, 'root')}>
                    <LanguageProvider lang={lang}>{children}</LanguageProvider>
                </div>
            </ThemeProvider>
        </AppRouterCacheProvider>
    )
}
