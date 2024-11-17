'use client'

import { use } from "react";
import cn from "classnames";

import styles from "../page.module.scss"

import { PageProvider } from "@/layers/app/providers";

import { Error404 } from "@/layers/widgets/404";

import { useTheme } from "@/layers/app/hooks";

import { Language } from "@/layers/shared/types";
interface Props {
  params: Promise<{ lang: Language }>;
}

export default function NotFound({params}: Props) {
  const { theme } = useTheme();
  const { lang } = use(params);
  
  return (
    <PageProvider lang={lang}>
      <div className={cn(styles["root_" + theme], styles.root)}>
        <Error404 />
      </div>
    </PageProvider>
  )
}