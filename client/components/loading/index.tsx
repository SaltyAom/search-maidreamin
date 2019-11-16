import { Fragment, SFC, memo } from "react"

import Card from "components/card"

const Loading: SFC<{}> = memo(() => (
	<Fragment>
		<Card preload />
		<Card preload />
		<Card preload />
		<Card preload />
	</Fragment>
))

export default Loading
