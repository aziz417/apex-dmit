import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';

const FETCH_COMPANY_REQUEST = 'FETCH_COMPANY_REQUEST';
const FETCH_COMPANY_SUCCESS = 'FETCH_COMPANY_SUCCESS';
const FETCH_COMPANY_FAILURE = 'FETCH_COMPANY_FAILURE';

const fetchCompanyRequest = () => ({
  type: FETCH_COMPANY_REQUEST,
});

const fetchCompanySuccess = (companyData: any, params: any) => ({
  type: FETCH_COMPANY_SUCCESS,
  payload: { companyData, params },
});

const fetchCompanyFailure = (error: string) => ({
  type: FETCH_COMPANY_FAILURE,
  payload: error,
});

export const fetchCompany:any = (params: any): ThunkAction<void, RootState, null, any> => async (
  dispatch
) => {
  dispatch(fetchCompanyRequest());

  try {
    let path = 'http://139.59.35.127/production/propsoft-api/public/api/get-all-companys';

    params = params || {};
    const _params: any = [];

    Object.keys(params)?.forEach(x => {
        const v = params[x];
        if (v) _params.push(`${x}=${v}`);
    })

    if (_params?.length) {
        path = `${path}?${_params.join('&')}`;
    }

    const response = await fetch(`${path}`);
    const companyData = await response.json();
    
    dispatch(fetchCompanySuccess(companyData, params));
  } catch (error:any) {
    dispatch(fetchCompanyFailure(error.message));
  }
};
