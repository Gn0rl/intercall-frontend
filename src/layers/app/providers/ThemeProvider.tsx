'use client'

import { Theme } from "@/layers/shared/types";
import { createContext, FC, ReactElement, useEffect, useState } from "react";

interface Props {
    children: ReactElement;
}

const DEFAULT_THEME = 'dark'

export const ThemeContext = createContext(DEFAULT_THEME)

export const ThemeProvider: FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(DEFAULT_THEME)

    useEffect(() => {
        const isDarkMode = globalThis.matchMedia('(prefers-color-scheme: dark)').matches;

        setTheme(isDarkMode ? "dark" : "light")
    }, [])

    return <ThemeContext.Provider value={theme}>
        {children}
    </ThemeContext.Provider>;
};
