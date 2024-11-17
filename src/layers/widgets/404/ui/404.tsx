'use client'

import Image from "next/image";
import Link from "next/link";

import { useTranslate } from "@/layers/app/hooks";

import styles from './404.module.scss';


const IMAGE_URL = "/image/file.svg";

export function Error404() {
    const t = useTranslate()

    return (
    <main className={styles.container}>
        <div className={styles.content}>
            <Image width={256} height={256} src={IMAGE_URL} alt="" />
            <h1 className={styles.title}>404</h1>
            <p>{t('404Message')}, <Link href="/" className={styles.link}>{t('toMain')}</Link></p>
        </div>
    </main>
    )
}