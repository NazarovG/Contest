import { SET_SEARCH_FILTER, SET_MULTI_FILTER } from '../constants/projects';

const initialState = {
  search: '',
  multi: [
    {
      value: 'logo',
      label: 'Динамический лого',
      checked: false,
    },
    {
      value: 'promocode',
      label: 'Промокод',
      checked: false,
    },
  ],
};

export const projectsFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return {
        ...state,
        search: action.value,
      };
    case SET_MULTI_FILTER:
      return {
        ...state,
        multi: state.multi.map(item =>
          item.value === action.value
            ? { ...item, checked: action.checked }
            : item,
        ),
      };
    default:
      return state;
  }
};
