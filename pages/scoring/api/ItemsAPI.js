import http from 'generic-http';
import { API_ROOT } from '../../../constants';

export const getData = async (fromID, forID, quarter) => http.get(`${API_ROOT}/Data?forID=${forID}&fromID=${fromID}&quarter=${quarter}`).then(response => response.json());