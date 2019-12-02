import { Fragment, memo } from "react"

import Tabbar from "components/tabbar"
import Fab from "components/fab"
import Snackbar from "components/snackbar"

const UtilityLayout = memo(({ children }) => (
    <Fragment>
        <Tabbar />
        {children}
        <Fab />
        <Snackbar />
    </Fragment>
))

export default UtilityLayout