import { useTheme as useMuiTheme } from '@mui/material'

export const useTheme = () => {
    const theme = useMuiTheme()
    const { mode } = theme.palette

    return {
        theme: mode,
        isDarkTheme: mode === 'dark',
        isLightTheme: mode === 'light',
        more: theme,
    }
}
