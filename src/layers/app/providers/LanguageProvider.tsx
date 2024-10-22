import { Language } from "@/layers/shared/types";
import { createContext, FC, ReactElement } from "react";

export const LanguageContext = createContext<Language>("ru");

interface Props {
  lang: "ru" | "en-US";
  children: ReactElement;
}

export const LanguageProvider: FC<Props> = ({ children, lang }) => {
  return (
    <LanguageContext.Provider value={lang}>{children}</LanguageContext.Provider>
  );
};
