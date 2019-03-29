// import http from 'generic-http';
// import constants from '../../constants';
// import { INMEMORYAD_ROOT } from '../../../constants';

// export const getManagingDepartmentForUser = (departmentID) => http.get(`${INMEMORYAD_ROOT}inmemoryad/getuserdetails?email=${email}`).then(r => r.json());

export const getManagingDepartmentForUser = async (departmentID) => Promise.resolve(({
    PerformanceDashboardID: 41
}));


// export default {
//     getOrgUnits() {
//         return http.get(`${constants.DASHBOARD_ROOT}/api/OrgUnits?include=Countries,DepartmentType&predicates=ActiveDepartments&api_token=${encodeURIComponent(constants.PERFORMANCE_DASHBOARD_ACCESS_TOKEN)}`)
//             .then(response => response.json());
//     },
//     getCountries() {
//         return http.get(`${constants.DASHBOARD_ROOT}/api/Countries?api_token=${encodeURIComponent(constants.PERFORMANCE_DASHBOARD_ACCESS_TOKEN)}`)
//             .then(response => response.json());
//     },
// };