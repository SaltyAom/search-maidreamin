import { Fragment, FC, memo } from "react"

import Card from "components/card"
import CardContainer from "components/cardContainer"

const Loading: FC<{}> = memo(() => (
	<Fragment>
		<CardContainer disabled>
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
		</CardContainer>
		<Card preload />
	</Fragment>
))

export default Loading
