import React, { FC, memo } from "react"

import { scrollWindow } from 'libs/helpers'

import "./fab.styl"

const Fab: FC<{}> = memo(() => {
	const backToTop = () => {
		CSS.supports("scroll-behavior", "smooth")
			? window.scrollTo({
				top: 0,
				behavior: "smooth"
			})
			: scrollWindow({
				top: 0,
				duration: 700
			})
	}

	return (
		<button id="fab" onClick={() => backToTop()}>
			<img
				id="fab-icon"
				src="/img/expand_less.svg"
				alt="Back to top"
				aria-label="Back to top"
			/>
		</button>
	)
})

export default Fab
