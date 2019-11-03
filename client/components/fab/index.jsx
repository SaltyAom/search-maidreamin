import React from "react"

import "./fab.styl"

const Fab = () => {
	return (
		<button id="fab" onClick={() => window.scrollTo(0, 0)}>
			<img
				id="fab-icon"
				src="/img/expand_less.svg"
				alt="Back to top"
				aria-label="Back to top"
			/>
		</button>
	)
}

export default Fab
