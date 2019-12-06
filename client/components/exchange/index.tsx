import { Fragment, FC, useState } from "react"

import { Dispatch } from "redux"
import { connect } from "react-redux"
import { exchangeSelector } from 'stores/selectors'

import ExchangeSelect from "components/exchangeSelect"

import IExchange, { IExchangeStoreAsComponent, TExchangeDispatch } from "./types"

import MaterialButton from '@material/react-button'

import "./exchange.styl"

const mapStateToProps = (state): IExchangeStoreAsComponent => ({
	store: {
		exchange: exchangeSelector(state)
	}
})

const mapDispatchToProps = (dispatch: Dispatch<TExchangeDispatch>) => ({
	dispatch: {
		updateServiceCharge: (serviceCharge) =>
			dispatch({
				type: "UPDATE_SERVICE_CHARGE",
				payload: {
					exchange: {
						serviceCharge: serviceCharge
					}
				}
			}),
	}
})

const Exchange: FC<IExchange> = ({ store, dispatch }: IExchange) => {
	let { exchange } = store,
		{ serviceCharge } = exchange,
		{ updateServiceCharge } = dispatch

	let [ isOpen, setOpen ] = useState(false)

	if (!isOpen) return (
		<Fragment>
			<MaterialButton
				id="exchange-option"
				onClick={() => setOpen(!isOpen)}
				icon={
					<img
						id="search-sort-icon"
						src="/img/notes.svg"
						alt="Sort"
					/>
				}
			>
				Options
			</MaterialButton>
			<form id="filter" className="hidden" />
		</Fragment>
	)

	let exchangeOptions = [
		{
			name: "Service Charge",
			active: serviceCharge,
			callback: (value) => updateServiceCharge(value)
		}
	]

	return (
		<Fragment>
			<MaterialButton
				id="exchange-option"
				onClick={() => setOpen(!isOpen)}
				icon={
					<img
						id="search-sort-icon"
						src="/img/notes.svg"
						alt="Sort"
					/>
				}
			>
				Options
			</MaterialButton>
			<form id="exchange" onSubmit={event => event.preventDefault()}>
				<div className="summarize">
					{exchangeOptions.map((option) => (
						<ExchangeSelect
							key={option.name}
							name={option.name}
							selected={option.active}
							callback={(value => option.callback(value))}
						/>
					))}
				</div>
			</form>
		</Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)
