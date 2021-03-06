/**
 * ? For some weird reason, I can't get React Spring to use with TypeScript.
 */

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

	let [isApply, setApply] = useState(false),
		[isRemoving, setRemoving] = useState(false)

	useEffect(() => {
		setTimeout(() => setApply(true), 500)
	}, [])

	if (!isApply)
		return (
			<tr className={`container ${isRemoving ? "is-removing" : ""}`}>
				<td className="table-backdrop">
					<img src="/img/close.svg" alt="Add to cart" />
				</td>
				<td className="row">
					<p className="data">{children}</p>
					<p className="data price">{price}</p>
				</td>
			</tr>
		)

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
		if (isRemoving) setTimeout(() => handleRemoveOrder(), 500)
	}, [isRemoving])

	let handleRemoveOrder = () => {
		setRemoving(false)
		removeOrder(index)
	}

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
