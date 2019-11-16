import { SFC, memo } from "react"

import ICardTitle from "./types"

const CardTitle: SFC<ICardTitle> = memo(({ price, name }) => (
	<div className="body">
		<h2 className="name">{name}</h2>
		{typeof price !== "undefined" ? (
			<p className="price">฿{price}</p>
		) : null}
	</div>
))

export default CardTitle
