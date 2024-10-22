import { FC, ReactElement } from "react";
import { ThemeProvider } from "./ThemeProvider";
import { LanguageProvider } from "./LanguageProvider";

interface Props {
    children: ReactElement;
    lang: "ru" | "en-US";
}

export const PageProvider: FC<Props> = ({ children, lang }) => {
    return <ThemeProvider>
        <LanguageProvider lang={lang}>
            {children}
        </LanguageProvider>
    </ThemeProvider>;
};
