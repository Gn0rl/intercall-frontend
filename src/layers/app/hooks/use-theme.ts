import { useContext } from "react"
import { ThemeContext } from "../providers"

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  return {theme, isDarkThme: theme === "dark", isLightTheme: theme === "light"};
}