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
            <div className="card">
                <div className="body">
                    <h2 className="name">Something went wrong.</h2>
                </div>
                <footer className="footer">
                    <button
                        className="other"
                        onClick={() => window.location.reload()}
                    >
                        Retry connection
                    </button>
                </footer>
            </div>
            <Card preload />
        </SearchLayout>
    )
}

export default Loading