import { Fragment } from "react"

import { connect } from "react-redux"
import { orderSelector } from 'stores/selectors'

import Head from "next/head"

import OrderLayout from "components/orderLayout"
import Header from "components/header"
import Table from "components/table"
import Exchange from "components/exchange"

const mapStateToProps = state => ({
	store: {
		order: orderSelector(state)
	}
})

const mapDispatchToProps = null

const Order = ({ store }) => {
	let { order, exchange } = store

	return (
		<Fragment>
			<Head>
				<title>Order</title>
			</Head>
			<OrderLayout>
				<Header title="Order">
					Total: {order.length}{" "}
					{order.length >= 2 ? "orders" : "order"}
				</Header>
				<Header title="" contained={false} dense>
					<Exchange />
				</Header>
				<Table data={order} />
			</OrderLayout>
		</Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
