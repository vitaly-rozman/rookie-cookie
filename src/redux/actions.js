import { DATA_FETCH, DATA_RESET } from './constants';

const dataFetch = (keyword) => ({ type: DATA_FETCH, keyword })

const dataReset = () => ({ type: DATA_RESET })

export { dataFetch, dataReset }
