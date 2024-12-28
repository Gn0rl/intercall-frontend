'use client'

import { FC } from 'react'

import { useTranslate } from '@/layers/app/hooks'

import styles from './Welcome.module.scss'

export const Welcome: FC = () => {
    const t = useTranslate()

    return <main className={styles.root}>{t('welcome')}</main>
}
