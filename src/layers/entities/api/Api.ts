import { getChats } from './getChats'

export class Api {
    static get chats() {
        return getChats()
    }
}
