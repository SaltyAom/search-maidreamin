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

	if (preload) {
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
						className="other preload-other"
						name="loading-1"
						onClick={() => setLanguage("en")}
					>
						<div className="preload small" />
					</button>
					<button
						className="other preload-other"
						name="loading-2"
						onClick={() => setLanguage("jp")}
					>
						<div className="preload small" />
					</button>
				</footer>
			</div>
		)
	}

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
							<button
								className="other"
								name={en}
								onClick={() => setLanguage("en")}
							>
								{en}
							</button>
							<button
								className="other"
								name={jp}
								onClick={() => setLanguage("jp")}
							>
								{jp}
							</button>
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
							<button
								className="other"
								name={th}
								onClick={() => setLanguage("th")}
							>
								{th}
							</button>
							<button
								className="other"
								name={jp}
								onClick={() => setLanguage("jp")}
							>
								{jp}
							</button>
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
							<button
								className="other"
								name={th}
								onClick={() => setLanguage("th")}
							>
								{th}
							</button>
							<button
								className="other"
								name={en}
								onClick={() => setLanguage("en")}
							>
								{en}
							</button>
						</footer>
					</div>
				)
			default:
				return (
					<div className="card">
						<div className="body">
							<h2 className="name">TH</h2>
							<p className="price">฿{price}</p>
						</div>
						<footer className="footer">
							<button
								className="other"
								name={en}
								onClick={() => setLanguage("en")}
							>
								{en}
							</button>
							<button
								className="other"
								name={jp}
								onClick={() => setLanguage("jp")}
							>
								{jp}
							</button>
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
					onClick={() => setSelected(0)}
				>
					{subMenu[0]}
				</button>
			</footer>
		</div>
	)
}

export default Card
