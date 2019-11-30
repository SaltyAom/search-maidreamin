import { createContext } from 'react'
import { Subject } from 'rxjs'

export const isServer = typeof window === "undefined"
export const isDev = process.env.NODE_ENV !== "production"

export const isBlank = (value: object) => {
    if(typeof value === "undefined")
        return true

    if(typeof value[0] === "undefined")
        return true

    return false
}

export const search$ = createContext(new Subject()),
    loading$ = createContext(new Subject())

export const fps = (requestedFrame) => 1000 / requestedFrame

export const move = ({
    from, 
    to,
    percent
}) =>
    from > to 
        ? from - (from * percent / 100) 
        : from + (to * percent / 100)

export const scrollOf = (target: HTMLElement, {
    left = target.offsetLeft,
    top = target.offsetTop,
    duration
}) => {
    let repeat = Math.ceil(duration / fps(60)),
        initialX = target.scrollLeft,
        initialY = target.scrollTop

    Array.apply(undefined, Array(repeat)).forEach((data, counter) => {
        let step = (counter + 1) / repeat * 100,
        stepX = move({
            from: initialX,
            to: left,
            percent: step
        }),
        stepY = move({ 
            from: initialY, 
            to: top, 
            percent: step 
        })

        return setTimeout(() => {
            return target.scroll(stepX, stepY)
        }, fps(60) * counter)
    })
}

export const scrollWindow = ({
    left = window.scrollX,
    top = window.scrollY,
    duration
}) => {
    let repeat = Math.ceil(duration / fps(60)),
        initialX = window.scrollX,
        initialY = window.scrollY

    Array.apply(undefined, Array(repeat)).forEach((data, counter) => {
        let step = (counter + 1) / repeat * 100,
        stepX = move({
            from: initialX,
            to: left,
            percent: step
        }),
        stepY = move({ 
            from: initialY, 
            to: top, 
            percent: step 
        })

        return setTimeout(() => {
            return window.scroll(stepX, stepY)
        }, fps(60) * counter)
    })
}