import cn from 'classnames'
import { FC, ReactNode } from 'react'

import { ColorToken } from '@/layers/app/tokens'
import { Page } from '@/layers/app/types'
import MuiLink from '@mui/material/Link'

import styles from './Link.module.scss'

interface Props {
    children: ReactNode
    href: Page
    className?: string
}

export const Link: FC<Props> = ({ children, className, ...props }) => {
    return (
        <MuiLink
            color={ColorToken.LinkPrimaryTextColor}
            className={cn(className, styles.root)}
            {...props}
        >
            {children}
        </MuiLink>
    )
}
