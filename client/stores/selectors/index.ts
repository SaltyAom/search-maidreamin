import { createSelector } from 'reselect'

import IInitState from 'stores/types/initState'
import IFilterState from 'stores/types/reducers/filter'

export const rootFilterSelector = (state: IInitState):IFilterState => state.filter,
    rootGuideSelector = (state: IInitState) => state.guide,
    rootOrderSelector = (state: IInitState) => state.order,
    rootMenuSelector = (state: IInitState) => state.menu,
    rootExchangeSelector = (state: IInitState) => state.exchange

export const filterSelector = createSelector(
    rootFilterSelector,
    filter => filter
),
guideSelector = createSelector(
    rootGuideSelector,
    guide => guide
),
orderSelector = createSelector(
    rootOrderSelector,
    order => order
),
menuSelector = createSelector(
    rootMenuSelector,
    menu => menu
),
exchangeSelector = createSelector(
    rootExchangeSelector,
    exchange => exchange
)