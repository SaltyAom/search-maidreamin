import { createContext } from 'react'
import { Subject } from 'rxjs'

export const isServer = typeof window === "undefined"
export const isDev = process.env.NODE_ENV !== "production"

export const isBlank = (value) => typeof value[0] === "undefined"

export const search$ = createContext(new Subject())
export const SearchProvider = search$.Provider
export const SearchConsumer = search$.Consumer