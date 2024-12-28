import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'

import Button from '@mui/material/Button'

import styles from './ChatIcon.module.scss'

interface Props {
    size?: 's'
    src: string
    name?: string
    className?: string
    style?: React.CSSProperties
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const SIZE = {
    s: 48,
} as const

export const ChatIcon: FC<Props> = ({
    src,
    name = '',
    className,
    size = 's',
    style,
    onClick,
}) => {
    return (
        <Button className={cn(className, styles.root)} onClick={onClick}>
            <Image
                className={styles.image}
                src={src}
                style={style}
                alt={name}
                width={SIZE[size]}
                height={SIZE[size]}
                placeholder="blur"
            />
        </Button>
    )
}
