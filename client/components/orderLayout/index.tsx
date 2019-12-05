import { Fragment, memo } from 'react'

import Head from "next/head"

import './orderLayout.styl'

const OrderLayout = memo(({ children }) => (
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