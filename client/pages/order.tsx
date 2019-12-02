import { Fragment } from "react"

import { connect } from "react-redux"

import Head from "next/head"

import OrderLayout from "components/orderLayout"
import Header from "components/header"
import Table from "components/table"

const mapStateToProps = state => ({
	store: {
		order: state.order
	}
})

const mapDispatchToProps = null

const Order = ({ store }) => {
	let { order } = store

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
				<Table data={order}></Table>
			</OrderLayout>
		</Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
