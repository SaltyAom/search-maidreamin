import { Fragment, FC, memo } from "react"

import { connect } from 'react-redux'
import { guideSelector } from 'stores/selectors'

import Tab from "components/tab"
import Tabbar from "components/tabbar"
import Fab from "components/fab"
import Snackbar from "components/snackbar"

import IInitState from "stores/types/initState"
import IUtility, { IUtilityStoreConnect, IUtilityOwnProps } from './types'

const mapStateToProps = (state: IInitState, ownProps: IUtilityOwnProps): IUtilityStoreConnect => ({
    store: {
        guide: guideSelector(state)
    },
    props: ownProps
})

const mapDispatchToProps = null

const UtilityLayout:FC<IUtility> = memo(({ props, store }) => {
    let { guide } = store,
        { isActive } = guide,
        { children, rehydrated = true } = props

    if(isActive && rehydrated)
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