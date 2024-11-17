import { FC, ReactElement } from "react";

import { Language } from "@/layers/shared/types";

import { ThemeProvider } from "./ThemeProvider";
import { LanguageProvider } from "./LanguageProvider";

interface Props {
    children: ReactElement;
    lang: Language;
}

export const PageProvider: FC<Props> = ({ children, lang }) => {
    return <ThemeProvider>
        <LanguageProvider lang={lang}>
            {children}
        </LanguageProvider>
    </ThemeProvider>;
};
