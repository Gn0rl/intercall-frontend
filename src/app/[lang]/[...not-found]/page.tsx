'use client'

import cn from 'classnames'
import { use } from 'react'

import { useTheme } from '@/layers/app/hooks'
import { PageProvider } from '@/layers/app/providers'
import { Language } from '@/layers/shared/types'
import { Error404 } from '@/layers/widgets/404'

import styles from '../page.module.scss'

interface Props {
    params: Promise<{ lang: Language }>
}

export default function NotFound({ params }: Props) {
    const { theme } = useTheme()
    const { lang } = use(params)

    return (
        <PageProvider lang={lang}>
            <div className={cn(styles['root_' + theme], styles.root)}>
                <Error404 />
            </div>
        </PageProvider>
    )
}
