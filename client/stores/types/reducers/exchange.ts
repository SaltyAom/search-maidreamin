export interface IUpdateServiceCharge {
	type: "UPDATE_SERVICE_CHARGE"
	payload: {
		exchange: {
			serviceCharge: boolean
		}
	}
}

export type TExchangeAction = IUpdateServiceCharge
export default interface IExchangeStore {
	serviceCharge: boolean
}