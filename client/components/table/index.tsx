import { FC, memo } from "react"

import SlidableRow from "components/slidableRow"

import ITable from "./types"

import "./table.styl"

const Table: FC<ITable> = memo(({ data }) => (
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
					price={dataSet.price.toLocaleString()}
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
								.map(menu => menu.price)
								.reduce((price, sum) => price + sum)
								.toLocaleString()
						: 0}
				</td>
			</tr>
		</tbody>
	</table>
))

export default Table
