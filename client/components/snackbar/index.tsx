import { FC, useState, useEffect, useRef } from "react"

import { connect } from "react-redux"
import { orderSelector } from 'stores/selectors'

import { isBlank } from "libs/helpers"

import ISnackbar, { ISnackbarInfo } from "./types"

import "./snackbar.styl"

const mapStateToProps = state => ({
	store: {
		order: orderSelector(state)
	}
})

const mapDispatchToProps = null

const Snackbar: FC<ISnackbar> = ({ store }) => {
	let { order } = store,
		[totalOrder, setTotalOrder] = useState(0)

	let [currentOrder, setOrder] = useState<ISnackbarInfo>(undefined),
		queue = useRef([])

	useEffect(() => {
		setTotalOrder(order.length)

		if (isBlank(order[0])) return

		queue.current.push(
			Object.assign(
				order[order.length - 1],
				totalOrder < order.length
					? { type: "added" }
					: { type: "removed" }
			)
		)

		if (isBlank(queue[1])) invokeSnackbar()
	}, [order])

	let invokeSnackbar = () => {
		if (typeof currentOrder !== "undefined" || isBlank(queue.current[0])) return

		setOrder(queue.current[0])

		return setTimeout(() => {
			queue.current.shift()
			setOrder(undefined)

			if(!isBlank(queue.current[0]))
				setTimeout(() => invokeSnackbar(), 100)
		}, 4500)
	}
	
	if (typeof currentOrder === "undefined") return null

	return (
		<div id="snackbar">
			<p>
				{currentOrder.name.th || currentOrder.subMenu[0]} is {currentOrder.type}
			</p>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar)
