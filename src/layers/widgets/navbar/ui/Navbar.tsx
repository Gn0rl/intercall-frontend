'use client'

import { FC, useEffect, useState } from 'react'

import { Api, Chat } from '@/layers/entities/api'
import { Icon } from '@/layers/shared/Icon'
import Skeleton from '@mui/material/Skeleton'

import styles from './Navbar.module.scss'

export const Navbar: FC = () => {
    const [chats, setChats] = useState<Chat[]>([])

    useEffect(() => {
        ;(async () => {
            const chats = await Api.chats

            setChats(chats)
        })()
    }, [])

    return (
        <nav className={styles.nav}>
            <ul className={styles.chats}>
                {chats.length
                    ? chats.map(({ iconUrl, id, name, placeholder }) => (
                          <li key={id}>
                              <Icon
                                  className={styles.chatIcon}
                                  imageClassName={styles.chatIconImage}
                                  image={{ src: iconUrl, placeholder }}
                                  alt={name}
                              />
                          </li>
                      ))
                    : new Array(6)
                          .fill(null)
                          .map((_, i) => (
                              <Skeleton
                                  key={i}
                                  variant="rectangular"
                                  width={64}
                                  height={60}
                                  className={styles.chatIconImage}
                              />
                          ))}
            </ul>
        </nav>
    )
}
