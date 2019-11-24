import { FC, memo } from "react"

import ILanguageProps from "./types"

const languageButton: FC<ILanguageProps> = memo(
	({ language, name, onClick = () => null }) => {
		if (typeof name === "undefined" || name === "") return null

		return (
			<button
				className="other"
				name={name}
				aria-label={name}
				onClick={() => onClick(language)}
			>
				{name}
			</button>
		)
	}
)

export default languageButton
