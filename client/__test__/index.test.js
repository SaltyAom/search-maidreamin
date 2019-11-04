import React from 'react'
import { shallow } from 'enzyme'

import MaidreaminSearch from 'pages/index'
import SearchLayout from 'components/searchLayout'
import Card from 'components/card'
import Fab from 'components/fab'
import ErrorBoundary from 'components/ErrorBoundary'

describe('Maidreamin Search', () => {
    it('should contains Search Layout', () => {
        const maidreaminSearch = shallow(<MaidreaminSearch />)

        expect(maidreaminSearch.find(SearchLayout)).toHaveLength(1)
    })

    it('should contains Floating Action Button', () => {
        const searchLayout = shallow(<SearchLayout />)

        expect(searchLayout.find(Fab)).toHaveLength(1)
    })

    it('can contains Menu Cards', () => {
        const searchLayout = shallow(
            <SearchLayout>
                <Card preload />
                <Card preload />
                <Card preload />
            </SearchLayout>
        )

        expect(searchLayout.contains(<Card preload />)).toEqual(true)
    })

    it('can contains Error Boundary', () => {
        const app = shallow(
            <ErrorBoundary>
                <div />
            </ErrorBoundary>
        )

        expect(app.contains(<div />)).toEqual(true)
    })
})