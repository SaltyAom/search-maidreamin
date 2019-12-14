import { memo, FC } from "react"

import MaterialButton from "@material/react-button"

import IExchangeSelect from './types'

const ExchangeSelect: FC<IExchangeSelect> = memo(({ name, selected, callback }) =>
	selected ? (
		<MaterialButton
			unelevated
			className="option active"
			onClick={() => callback(!selected)}
			name={`${name} is active.`}
		>
			{name}
		</MaterialButton>
	) : (
		<MaterialButton
			className="option"
			name={`${name} is disable`}
			onClick={() => callback(!selected)}
		>
			{name}
		</MaterialButton>
	)
)

export default ExchangeSelect