import { Fragment, FC, memo } from "react"

import Card from "components/card"

const Loading: FC<{}> = memo(() => (
	<Fragment>
		<Card preload />
		<Card preload />
		<Card preload />
		<Card preload />
	</Fragment>
))

export default Loading
