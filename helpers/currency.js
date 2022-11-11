export const EMPTY_CURRENCY = {
  id: 0,
  name: '',
  code: '',
  symbol: ''
};

const EXCLUDED_FIELDS = ['id'];
export const VISIBLE_FIELDS = Object.keys(EMPTY_CURRENCY).filter(key => !EXCLUDED_FIELDS.includes(key));
