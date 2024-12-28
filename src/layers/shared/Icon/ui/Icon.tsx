'use client'

import cn from 'classnames'
import Image from 'next/image'
import { FC, MouseEvent } from 'react'

import Button from '@mui/material/Button'

import styles from './Icon.module.scss'

interface Props {
    size?: keyof typeof SIZES
    image: {
        src: string
        placeholder?: string
    }
    alt?: string
    className?: string
    imageClassName?: string
    onClick?: (event: MouseEvent) => void
    priority?: boolean
}

const SIZES = {
    m: 48,
} as const

export const Icon: FC<Props> = ({
    size = 'm',
    className,
    imageClassName,
    image,
    alt = '',
    onClick,
    priority,
}) => {
    return (
        <Button className={cn(styles.root, className)} onClick={onClick}>
            <Image
                className={cn(styles.image, imageClassName)}
                width={SIZES[size]}
                height={SIZES[size]}
                src={image.src}
                alt={alt}
                placeholder={image.placeholder ? 'blur' : 'empty'}
                blurDataURL={image.placeholder}
                priority={priority}
            />
        </Button>
    )
}
