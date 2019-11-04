import { createContext } from 'react'
import { Subject } from 'rxjs'

export const isServer = typeof window === "undefined"
export const isDev = process.env.NODE_ENV !== "production"

export const isBlank = (value) => {
    if(typeof value === "undefined")
        return true

    if(typeof value[0] === "undefined")
        return true

    return false
}

export const search$ = createContext(new Subject())
export const SearchProvider = search$.Provider
export const SearchConsumer = search$.Consumer