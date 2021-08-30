import {
  SHOW_LOADER,
  FETCH_DATA,
  CHANGE_LANG,
  CLICK_HANDLE,
} from './types/types'

const handlers = {
  [SHOW_LOADER]: state => ({ ...state, loading: true }),
  [FETCH_DATA]: (state, { payload }) => ({
    ...state,
    loading: false,
    week: payload.week,
    virtues: payload.virtues,
    history: payload.history,
  }),
  [CHANGE_LANG]: (state, { payload }) => ({
    ...state,
    loading: false,
    virtues: payload.virtues,
    lang: payload.lang,
  }),
  [CLICK_HANDLE]: (state, { payload }) => ({
    ...state,
    history: payload.history,
  }),
  DEFAULT: state => state,
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}
