'use client'

import { useTheme, useTranslate } from '@/layers/app/hooks'
import { PageProvider } from '@/layers/app/providers'
import { Language } from '@/layers/shared/types'
import cn from 'classnames'
import { FC, use } from 'react'

import styles from './page.module.scss'

interface Props {
    params: Promise<{ lang: Language }>
}

export default function Home({ params }: Props) {
    const { lang } = use(params)

    return (
        <PageProvider lang={lang}>
            <Component />
        </PageProvider>
    )
}

const Component: FC = () => {
    const { theme } = useTheme()
    const t = useTranslate()

    return (
        <div className={cn(styles['root_' + theme], styles.root)}>
            <h1>{t('hello', { price: '33' })}</h1>
        </div>
    )
}
