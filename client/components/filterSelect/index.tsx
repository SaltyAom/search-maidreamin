import { memo, FC } from "react"

import IFilterSelect from './types'

import MaterialButton from "@material/react-button"

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
