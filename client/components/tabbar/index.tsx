import TabbarLink from "components/tabbarLink"

import './tabbar.styl'

const Tabbar = () => {
    return(
        <nav id="tab-bar">
            <TabbarLink href="/">Home</TabbarLink>
            <TabbarLink href="/order">Order</TabbarLink>
        </nav>
    )
}

export default Tabbar