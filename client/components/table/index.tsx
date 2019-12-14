import { FC, memo } from "react"

import { connect } from "react-redux"
import { exchangeSelector } from "stores/selectors"

import SlidableRow from "components/slidableRow"

import IInitState from "stores/types/initState"
import ITable, { ITableStoreConnect, ITableOwnProps } from "./types"

import "./table.styl"

const mapStateToProps = (
	state: IInitState,
	ownProps: ITableOwnProps
): ITableStoreConnect => ({
	store: {
		exchange: exchangeSelector(state)
	},
	props: ownProps
})

const mapDispatchToProps = null

const Table: FC<ITable> = memo(({ store, props }) => {
	let { exchange } = store,
		{ serviceCharge } = exchange,
		{ data } = props

	return (
		<table id="order-table">
			<thead className="header">
				<tr id="order-table-header">
					<td className="title name">Name</td>
					<td className="title price">Price</td>
				</tr>
			</thead>
			<tbody id="order-table-body">
				{data.map((dataSet, index) => (
					<SlidableRow
						key={index}
						price={(serviceCharge
							? dataSet.price * 1.1
							: dataSet.price
						).toLocaleString("th", {
							maximumFractionDigits: 0
						})}
						index={index}
					>
						{dataSet.name.th || dataSet.subMenu[0]}
					</SlidableRow>
				))}
				<tr className="row total">
					<td className="data">Total</td>
					<td className="data price">
						{data.length > 0
							? data
									.map(menu =>
										serviceCharge
											? menu.price * 1.1
											: menu.price
									)
									.reduce((price, sum) => price + sum)
									.toLocaleString("th", {
										maximumFractionDigits: 0
									})
							: 0}
					</td>
				</tr>
			</tbody>
		</table>
	)
})

export default connect(mapStateToProps, mapDispatchToProps)(Table)
