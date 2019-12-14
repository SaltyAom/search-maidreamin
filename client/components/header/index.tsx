import { FC, memo } from "react"

import IHeader from "./types"

import "./header.styl"

const Header: FC<IHeader> = memo(
	({ children, title, dense = false, contained = true }) =>
		!contained ? (
			<header className={`component-header ${dense ? "dense" : ""}`}>
				{children}
			</header>
		) : (
			<header className={`component-header ${dense ? "dense" : ""}`}>
				<h1 className="title">{title}</h1>
				<h2 className="detail">{children}</h2>
			</header>
		)
)

export default Header
