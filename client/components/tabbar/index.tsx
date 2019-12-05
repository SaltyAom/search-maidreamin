import { memo } from 'react'

import TabbarLink from "components/tabbarLink"

import './tabbar.styl'

const Tabbar = memo(() => (
    <nav id="tab-bar">
        <TabbarLink href="/">Home</TabbarLink>
        <TabbarLink href="/order">Order</TabbarLink>
    </nav>
))

export default Tabbar