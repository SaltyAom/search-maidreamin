import { createSelector } from 'reselect'

export const rootFilterSelector = state => state.filter,
    rootGuideSelector = state => state.guide,
    rootOrderSelector = state => state.order,
    rootMenuSelector = state => state.menu

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
)