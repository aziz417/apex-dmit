const initialState = {
  data: null,
  loading: false,
  error: null,
};


const FETCH_COMPANY_REQUEST = 'FETCH_COMPANY_REQUEST';
const FETCH_COMPANY_SUCCESS = 'FETCH_COMPANY_SUCCESS';
const FETCH_COMPANY_FAILURE = 'FETCH_COMPANY_FAILURE';

const companyReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.companyData,
        params: action.payload.params,
      };
    case FETCH_COMPANY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default companyReducer;
