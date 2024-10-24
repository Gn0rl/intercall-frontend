import { useContext } from "react";
import { LanguageContext } from "../providers";

import { Language } from "@/layers/shared/types";
import { dictionary } from "@/layers/shared/languages";

export function useTranslate() {
  const lang: Language = useContext(LanguageContext);

  return (key: string, params: Object) => {
  const dictionaryItem = dictionary[lang][key];
  if(dictionaryItem){
    return dictionaryItem.replace(/{(\w+)}/g, (match, p1) => params[p1]);
  }
  return key;
}
  
  //return (key: string) => dictionary[lang][key];
}