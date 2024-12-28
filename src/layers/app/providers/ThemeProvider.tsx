'use client'

import { FC, ReactElement, createContext, useEffect, useState } from 'react'

import { Theme } from '@/layers/shared/types'

interface Props {
    children: ReactElement
}

const DEFAULT_THEME = 'dark'

// @deprecated
export const ThemeContext = createContext(DEFAULT_THEME)

// @deprecated
export const ThemeProvider: FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME)

    useEffect(() => {
        const isDarkMode = globalThis.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches

        setTheme(isDarkMode ? 'dark' : 'light')
    }, [])

    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    )
}
