import { memo, FC } from "react"

import MaterialButton from "@material/react-button"

interface IFilterSelect {
	name: string
	sortBy: string
	callback: Function
}

const FilterSelect: FC<IFilterSelect> = memo(({ name, sortBy, callback }) =>
	sortBy === name ? (
		<MaterialButton
			unelevated
			disabled
			className="option active"
			name={`Sort by ${name}`}
		>
			{name}
		</MaterialButton>
	) : (
		<MaterialButton
			className="option"
			name={`Sort by ${name}`}
			onClick={() => callback(name)}
		>
			{name}
		</MaterialButton>
	)
)

export default FilterSelect
