import { useTheme as useMuiTheme } from '@mui/material'

export const useTheme = () => {
    const theme = useMuiTheme()
    const { mode } = theme.palette

    return {
        theme: mode,
        isDarkThme: mode === 'dark',
        isLightTheme: mode === 'light',
        more: theme,
    }
}
