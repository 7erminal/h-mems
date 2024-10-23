import { baseUrl } from './values'

export const ROUTES = {
    // GET CUSTOMER API
    // getCustomerApi: (mobileNumber) => `${customersApiEndPointBase}/customer-details/${mobileNumber}`,
    // DELETE CUSTOMER API
    uploadReconFileUrl: `${baseUrl}/core/api/upload-file/`,
    uploadStatementFileUrl: `${baseUrl}/core/api/upload-statement-file/`,
    getSessionUrl: `${baseUrl}/core/api/session/`,
    downloadReconFileUrl: `${baseUrl}/core/api/download-report/`,
    reconRedoUrl: `${baseUrl}/core/api/recon-redo/`,
    downloadBalanceFileUrl: `${baseUrl}/core/api/download-balance-file/`,
}