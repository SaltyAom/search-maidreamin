/**
 * ? For some weird reason, I can't get React Spring to use with TypeScript.
 */

import { useEffect, useState, useRef, Fragment } from 'react'

import { connect } from 'react-redux'

import { useSpring, animated, interpolate } from "react-spring"
import { useGesture } from "react-with-gesture"

// import Reward from 'react-rewards'

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
	let { children, data = {}, disabled = false} = props,
		{ addOrder } = dispatch

	let [isApply, setApply] = useState(false)
		// reward = useRef(undefined)

	useEffect(() => {
		setTimeout(() => setApply(true), 500)
	}, [])

	if(disabled || !isApply)
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
		if(!down && delta[0] >= 90){
			addOrder(data)
			// reward.current.rewardMe()
		}
	}, [down])

	return (
		<Fragment>
			{/* <Reward
				ref={(ref) => { reward.current = ref }}
				type="confetti"
			/> */}
			<animated.div {...bind()} className="card">
				<animated.div
					className="av"
					style={{
						transform: avSize,
						justifySelf: delta[0] < 0 ? "end" : "start"
					}}
				>
					<img src="/img/add.svg" alt="Add to cart" />
				</animated.div>
				<animated.div
					className="card-paper"
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
		</Fragment>
	)
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CardContainer)