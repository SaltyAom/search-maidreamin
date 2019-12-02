import { useEffect } from 'react'

import { connect } from 'react-redux'

import { useSpring, animated, interpolate } from "react-spring"

import { useGesture } from "react-with-gesture"

import "./container.styl"

const mapStateToProps = (state, ownProps) => ({
	props: ownProps
})

const mapDispatchToProps = dispatch => ({
	dispatch: {
		addOrder: (data) => dispatch({
			type: "ADD_ORDER",
			payload: {
				order: data
			}
		})
	}
})

const CardContainer = ({ props, dispatch }) => {
	let { children, data = {}, disabled = false } = props,
		{ addOrder } = dispatch

	if(disabled)
		return (
			<div className="card">
				<div className="card-paper">
					{children}
				</div>
			</div>
		)

	let [bind, { delta, down }] = useGesture(),
	{ x, size } = useSpring({
		x: down && delta[0] > 0
			? delta[0] < 120 
				? delta[0]
				: 120 
			: 0,
		size: down ? 1.05 : 1,
		immediate: name => down && name === "x",
	})

	let avSize = x.interpolate({
		range: [60, 120],
		output: ["scale(1)", "scale(2.5)"],
		extrapolate: "clamp"
	})

	useEffect(() => {
		if(!down && delta[0] >= 90)
			return addOrder(data)
	}, [down])

	return (
		<animated.div {...bind()} class="card">
			<animated.div
				class="av"
				style={{
					transform: avSize,
					justifySelf: delta[0] < 0 ? "end" : "start"
				}}
			>
				<img src="/img/add.svg" alt="Add to cart" />
			</animated.div>
			<animated.div
				class="card-paper"
				style={{
					transform: interpolate(
						[x, size],
						(x, s) => `translateX(${x}px) scale(${s})`
					)
				}}
			>
				{children}
			</animated.div>
		</animated.div>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CardContainer)