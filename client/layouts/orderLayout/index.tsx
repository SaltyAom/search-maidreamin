import { FC, Fragment, memo } from 'react'

import Head from "next/head"

import './orderLayout.styl'

const OrderLayout:FC<{}> = memo(({ children }) => (
        <Fragment>
            <Head>
                <title>Order</title>
            </Head>
            <main id="layout">
                {children}
            </main>
        </Fragment>
    )
)

export default OrderLayout