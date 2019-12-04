import { useState, useEffect } from "react"

import { connect } from "react-redux"

import { useSpring, animated, interpolate } from "react-spring"

import { useGesture } from "react-with-gesture"

import "./slidable-row.styl"

const mapStateToProps = (state, ownProps) => ({
	props: ownProps
})

const mapDispatchToProps = dispatch => ({
	dispatch: {
		removeOrder: index =>
			dispatch({
				type: "REMOVE_ORDER",
				payload: {
					index: index
				}
			})
	}
})

const SlideableRow = ({ props, dispatch }) => {
	let { children, price, index } = props,
		{ removeOrder } = dispatch

	let [isRemoving, setRemoving] = useState(false)

	let [bind, { delta, down }] = useGesture(),
		{ x, size } = useSpring({
			x: down && delta[0] < 0 ? (delta[0] > -75 ? delta[0] : -75) : 0,
			size: down ? 1.05 : 1,
			immediate: name => down && name === "x"
		})

	let avSize = x.interpolate({
		range: [-75, -30],
		output: ["scale(1.5)", "scale(0)"],
		extrapolate: "clamp"
	})

	useEffect(() => {
		if (!down && delta[0] <= -60) setRemoving(true)
	}, [down])

	useEffect(() => {
		if (isRemoving)
			setTimeout(() => removeOrder(index), 500)
	}, [isRemoving])

	useEffect(() => {
		return () => setRemoving(false)
	}, [])

	return (
		<animated.tr
			{...bind()}
			className={`container ${isRemoving ? "is-removing" : ""}`}
		>
			<td className="table-backdrop">
				<animated.img
					src="/img/close.svg"
					style={{ transform: avSize }}
					alt="Add to cart"
				/>
			</td>
			<animated.td
				className="row"
				style={{
					transform: interpolate(
						[x, size],
						(x, s) => `translateX(${x}px) scale(${s})`
					)
				}}
			>
				<p className="data">{children}</p>
				<p className="data price">{price}</p>
			</animated.td>
		</animated.tr>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideableRow)
