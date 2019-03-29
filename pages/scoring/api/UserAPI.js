import http from 'generic-http';
import { API_ROOT } from '../../../constants';

export const getUserDetails = async (email) => http.get(`${API_ROOT}/UserDetails`).then(r => r.json());