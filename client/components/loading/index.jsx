import { useContext } from 'react'
import { search$ } from 'libs/helpers'

import SearchLayout from "components/searchLayout"
import Card from "components/card"

const Loading = () => {
    let searchSubject$ = useContext(search$)

    return (
        <SearchLayout
            onChange={event => searchSubject$.next(event.target.value)}
        >
            <Card preload />
            <Card preload />
            <Card preload />
            <Card preload />
        </SearchLayout>
    )
}

export default Loading