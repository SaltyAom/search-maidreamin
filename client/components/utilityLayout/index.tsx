import { Fragment, FC, memo } from "react"

import { connect } from 'react-redux'

import Tab from "components/tab"
import Tabbar from "components/tabbar"
import Fab from "components/fab"
import Snackbar from "components/snackbar"

import IUtility, { IUtilityStore } from './types'

const mapStateToProps = (state, ownProps: IUtilityStore) => ({
    store: {
        guide: state.guide
    },
    props: ownProps
})

const mapDispatchToProps = null

const UtilityLayout:FC<IUtility> = memo(({ props, store }) => {
    let { guide } = store,
        { isActive } = guide,
        { children } = props

    if(isActive)
        return <Tab />

    return (
        <Fragment>
            <Tabbar />
                {children}
            <Fab />
            <Snackbar />
        </Fragment>
    )
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UtilityLayout)