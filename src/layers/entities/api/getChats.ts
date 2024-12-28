import { Chat } from './types'

export function getChats(): Promise<Chat[]> {
    return new Promise((res) => {
        setTimeout(() => {
            res([
                {
                    id: 1,
                    name: 'Chat 1',
                    iconUrl: '/image/serverIcon.jpg',
                    placeholder: '/image/serverIconPlaceholder.jpg',
                },
                {
                    id: 2,
                    name: 'Chat 1',
                    iconUrl: '/image/serverIcon.jpg',
                    placeholder: '/image/serverIconPlaceholder.jpg',
                },
                {
                    id: 3,
                    name: 'Chat 1',
                    iconUrl: '/image/serverIcon.jpg',
                    placeholder: '/image/serverIconPlaceholder.jpg',
                },
                {
                    id: 4,
                    name: 'Chat 1',
                    iconUrl: '/image/serverIcon.jpg',
                    placeholder: '/image/serverIconPlaceholder.jpg',
                },
                {
                    id: 5,
                    name: 'Chat 1',
                    iconUrl: '/image/serverIcon.jpg',
                    placeholder: '/image/serverIconPlaceholder.jpg',
                },
                {
                    id: 6,
                    name: 'Chat 1',
                    iconUrl: '/image/serverIcon.jpg',
                    placeholder: '/image/serverIconPlaceholder.jpg',
                },
            ])
        }, 2000)
    })
}
