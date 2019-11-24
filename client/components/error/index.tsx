import { Fragment, FC, memo } from "react"

import Card from "components/card"

const Loading: FC<{}> = memo(() => (
	<Fragment>
		<div className="card">
			<div className="body">
				<h2 className="name">Something went wrong.</h2>
			</div>
			<footer className="footer">
				<button
					className="other"
					onClick={() => window.location.reload()}
				>
					Retry connection
				</button>
			</footer>
		</div>
		<Card preload />
	</Fragment>
))

export default Loading
