import { createSelector } from 'reselect'

const getConfig = state => state.config.config

export const getConfigSelector = createSelector(
  getConfig,
  config => config
)
