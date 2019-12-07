import { Fragment } from "react"

import { connect } from "react-redux"
import { orderSelector } from 'stores/selectors'

import Head from "next/head"

import OrderLayout from "layouts/orderLayout"
import Header from "components/header"
import Table from "components/table"
import Exchange from "components/exchange"

import IInitState from 'stores/types/initState'
import { IOrderProps, IOrderStoreConnect } from 'pageTypes/order'
import { NextPage } from "next"

const mapStateToProps = (state: IInitState): IOrderStoreConnect => ({
	store: {
		order: orderSelector(state)
	}
})

const mapDispatchToProps = null

const Order: NextPage<IOrderProps> = ({ store }) => {
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
				<Header title="" contained={false} dense>
					<Exchange />
				</Header>
				<Table data={order} />
			</OrderLayout>
		</Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)
