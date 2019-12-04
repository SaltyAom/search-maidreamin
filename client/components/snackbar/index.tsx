import { FC, useState, useEffect, useRef } from "react"

import { connect } from "react-redux"

import { isBlank } from "libs/helpers"

import ISnackbar from "./types"
import { IMenu } from "pageTypes/index"

import "./snackbar.styl"

const mapStateToProps = state => ({
	store: {
		order: state.order
	}
})

const mapDispatchToProps = null

const Snackbar: FC<ISnackbar> = ({ store }) => {
	let { order } = store,
		[totalOrder, setTotalOrder] = useState(0),
		[isIncrease, setIncrease] = useState(false)

	let [currentOrder, setOrder] = useState<IMenu>(undefined),
		queue = useRef([])

	useEffect(() => {
		totalOrder < order.length ? setIncrease(true) : setIncrease(false)
		setTotalOrder(order.length)

		if (isBlank(order[0])) return

		queue.current.push(order[order.length - 1])

		if (isBlank(queue[1])) invokeSnackbar()
	}, [order])

	let invokeSnackbar = () => {
		if (typeof currentOrder !== "undefined") return

		setOrder(queue.current[0])

		setTimeout(() => {
			queue.current.shift()
			setOrder(undefined)

			setTimeout(() => invokeSnackbar(), 100)
		}, 4500)
	}
	
	if (typeof currentOrder === "undefined") return null

	return (
		<div id="snackbar">
			<p>
				{currentOrder.name.th || currentOrder.subMenu[0]} is{" "}
				{isIncrease ? "added" : "removed"}
			</p>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Snackbar)
