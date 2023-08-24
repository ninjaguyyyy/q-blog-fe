import { API_URL } from 'constants/setting';
import queryString from 'query-string';

export const buildApiUrl = (
  endpoint: string,
  params?: Record<string, string | number>
) => {
  const stringParams = params ? queryString.stringify(params) : '';
  return API_URL + endpoint + (stringParams ? `?${stringParams}` : '');
};
