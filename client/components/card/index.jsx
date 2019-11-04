import React, { useState } from "react"

import "./card.styl"

const Card = props => {
	let {
		th = "",
		en = "",
		jp = "",
		price,
		subMenu = null,
		preload = false
	} = props

	if (preload)
		return (
			<div className="card">
				<div className="body">
					<h2 className="name">
						<p className="preload" />
					</h2>
					<p className="price preload-price">
						<span className="preload" />
					</p>
				</div>
				<footer className="footer">
					<button
						aria-label="Switch to English"
						className="other preload-other"
						name="loading-1"
					>
						<div className="preload small" />
					</button>
					<button
						aria-label="Switch to Japanese"
						className="other preload-other"
						name="loading-2"
					>
						<div className="preload small" />
					</button>
				</footer>
			</div>
		)

	if (subMenu === null) {
		let [language, setLanguage] = useState("th")

		switch (language) {
			case "th":
				return (
					<div className="card">
						<div className="body">
							<h2 className="name">{th}</h2>
							{typeof price !== "undefined" ? (
								<p className="price">฿{price}</p>
							) : null}
						</div>
						<footer className="footer">
							{typeof en !== "undefined" && en !== "" ?
								<button
									className="other"
									name={en}
									aria-label={en}
									onClick={() => setLanguage("en")}
								>
									{en}
								</button>
							: null }
							{typeof jp !== "undefined" && jp !== "" ?
								<button
									className="other"
									name={jp}
									aria-label={jp}
									onClick={() => setLanguage("jp")}
								>
									{jp}
								</button>
							: null}
						</footer>
					</div>
				)
			case "en":
				return (
					<div className="card">
						<div className="body">
							<h2 className="name">{en}</h2>
							{typeof price !== "undefined" ? (
								<p className="price">฿{price}</p>
							) : null}
						</div>
						<footer className="footer">
							{typeof th !== "undefined" && th !== "" ?
								<button
									className="other"
									name={th}
									aria-label={th}
									onClick={() => setLanguage("th")}
								>
									{th}
								</button>
							: null }
							{typeof jp !== "undefined" && jp !== "" ?
								<button
									className="other"
									name={jp}
									aria-label={jp}
									onClick={() => setLanguage("jp")}
								>
									{jp}
								</button>
							: null }
						</footer>
					</div>
				)
			case "jp":
				return (
					<div className="card">
						<div className="body">
							<h2 className="name">{jp}</h2>
							{typeof price !== "undefined" ? (
								<p className="price">฿{price}</p>
							) : null}
						</div>
						<footer className="footer">
							{typeof th !== "undefined" && th !== "" ?
								<button
									className="other"
									name={th}
									aria-label={th}
									onClick={() => setLanguage("th")}
								>
									{th}
								</button>
							: null }
							{typeof en !== "undefined" && en !== "" ?
								<button
									className="other"
									name={en}
									aria-label={en}
									onClick={() => setLanguage("en")}
								>
									{en}
								</button>
							: null }
						</footer>
					</div>
				)
			default:
				return (
					<div className="card">
						<div className="body">
							<h2 className="name">{th}</h2>
							<p className="price">฿{price}</p>
						</div>
						<footer className="footer">
							{typeof en !== "undefined" && en !== "" ?
								<button
									className="other"
									name={en}
									aria-label={en}
									onClick={() => setLanguage("en")}
								>
									{en}
								</button>
							: null }
							{typeof jp !== "undefined" && jp !== "" ?
								<button
									className="other"
									name={jp}
									aria-label={jp}
									onClick={() => setLanguage("jp")}
								>
									{jp}
								</button>
							: null }
						</footer>
					</div>
				)
		}
	}

	let [selected, setSelected] = useState(0)

	if (selected === 0)
		return (
			<div className="card">
				<div className="body">
					<h2 className="name">{subMenu[0]}</h2>
					<p className="price">฿{price}</p>
				</div>
				<footer className="footer">
					<button
						className="other"
						name={subMenu[1]}
						aria-label={subMenu[1]}
						onClick={() => setSelected(1)}
					>
						{subMenu[1]}
					</button>
				</footer>
			</div>
		)
	return (
		<div className="card">
			<div className="body">
				<h2 className="name">{subMenu[1]}</h2>
				<p className="price">฿{price}</p>
			</div>
			<footer className="footer">
				<button
					className="other"
					name={subMenu[0]}
					aria-label={subMenu[0]}
					onClick={() => setSelected(0)}
				>
					{subMenu[0]}
				</button>
			</footer>
		</div>
	)
}

export default Card
