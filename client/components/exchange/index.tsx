import { Fragment, FC, useState } from "react"

import { connect } from "react-redux"
import { exchangeSelector } from 'stores/selectors'

import MaterialButton from '@material/react-button'

import ExchangeSelect from "components/exchangeSelect"

import IInitState from "stores/types/initState"
import IExchange, { IExchangeStoreAsComponent, IExchangeDispatchConnect } from "./types"

import "./exchange.styl"

const mapStateToProps = (state: IInitState): IExchangeStoreAsComponent => ({
	store: {
		exchange: exchangeSelector(state)
	}
})

const mapDispatchToProps = (dispatch): IExchangeDispatchConnect => ({
	dispatch: {
		updateServiceCharge: (serviceCharge) =>
			dispatch({
				type: "UPDATE_SERVICE_CHARGE",
				payload: {
					exchange: {
						serviceCharge: serviceCharge
					}
				}
			})
	}
})

const Exchange: FC<IExchange> = ({ store, dispatch }) => {
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
