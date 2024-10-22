import { useContext } from "react";
import { LanguageContext } from "../providers";

import { Language } from "@/layers/shared/types";
import { dictionary } from "@/layers/shared/languages";

export function useTranslate() {
  const lang: Language = useContext(LanguageContext);

  return (key: string) => dictionary[lang][key];
}
