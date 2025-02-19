const customerUATBaseUrl = `https://solisapimanagement.azure-api.net`;
const customerBaseUrl = `https://solisservicescustomerapi.azurewebsites.net`;
// const transactionsBaseUrl = `https://solisapimanagement.azure-api.net/transactions`;
// const rewardBaseUrl = `https://solisapimanagement.azure-api.net/loyalty`;
// const transactBaseUrl = `https://solisapimanagement.azure-api.net/uat/transactionservices`;
const transactionsBaseUrl = `https://solisservicestransactionapi.azurewebsites.net`;
const rewardBaseUrl = `https://solisservicesloyaltyapi.azurewebsites.net`;
const transactBaseUrl = `https://solisservicestransactionapi.azurewebsites.net`;

const leadsApiEndpoints = `${customerBaseUrl}/api`;
const customerApiEndpoints = `${customerBaseUrl}/api`;
const transactionApiEndpoints = `${transactionsBaseUrl}/api`;
const rewardApiEndpoints = `${rewardBaseUrl}/api`;
const transactionServicesEndpoints = `${transactBaseUrl}/api`;
const customerAPIUATEndpoints = `${customerUATBaseUrl}/api`;

const customerId = '';

// CUSTOMER SUBSCRIPTION ENDPOINT
const customersApiEndPointBase = `${customerApiEndpoints}/customers`;

// GET ALL CUSTOMERS
const getAllCustomersApiEndPoint = `${customerApiEndpoints}/customers`;

// POST A CUSTOMERS
const postCustomerApiEndPoint = `${customerApiEndpoints}/customers`;

// POST A CUSTOMERS
const putCustomerApiEndPoint = `${customerApiEndpoints}/customers`;

// DRAW API ENDPOINT
const drawApiEndPointBase = `${customerApiEndpoints}/customers`;

const leadId = '';

const accountNumber = '';

/*
    * ==================================================================
    * LEADS API
    * ==================================================================
    * */
    // CUSTOMER LEADS API ENDPOINT
const leadsApiEndpointBase = `${leadsApiEndpoints}/leads`;

const phoneNumber = '';

const mobileNumber = '';

const profileName = '';
const transactionId = '';
const drawId = '';
const accountnumber = '';
const id = '';

// DRAW API ENDPOINTS
const drawApiEndpointBase = rewardApiEndpoints;

const customersNiaDetails = `${customersApiEndPointBase}/nia-details`;

const transactionsApi = `${transactionApiEndpoints}/transactions`;

const getDraws = `${drawApiEndpointBase}/DrawAPI`;

const favorites = `${transactionServicesEndpoints}/transactions`;

const paymentsApiEndPointBase = `${transactionApiEndpoints}/payments`;

const loyaltyApi = `${rewardApiEndpoints}/LoyaltyAPI`;

export const ROUTES = {
    // GET CUSTOMER API
    getCustomerApi: `${customersApiEndPointBase}/${customerId}`,
    // DELETE CUSTOMER API
    deleteCustomerApi: `${customersApiEndPointBase}/${customerId}`,
    // GET CUSTOMER KYC
    deleteCustomerApi: `${customersApiEndPointBase}/${customerId}`,
    // GET CUSTOMER KYC
    customerKYCApi: `${customersApiEndPointBase}/customerkyc`,
    // REQUEST CUSTOMER KYC
    requestKYC: `${customersApiEndPointBase}/kycrequest`,
    // CUSTOMER EXISTS
    customerExists: `${customersApiEndPointBase}/customer-exists`,
    // CUSTOMER NIA DETAILS ENDPOINT
    customersNiaDetails: `${customersApiEndPointBase}/nia-details`,
    // CUSTOMER NIA DETAILS
    customerNiaDetails: `${customersNiaDetails}/${customerId}`,
    // VERIFY CUSTOMER
    verifyCustomer: `${customersApiEndPointBase}/verify-customer`,
    // GET CUSTOMER SUBSCRIPTION
    getCustomerSubscription: (leadId) => `${customersApiEndPointBase}/subscription/${leadId}`, // Append lead ID
    // GET CUSTOMER SUBSCRIPTION WITH ACCOUNT NUMBER
    getCustomerSubscriptionWithAccountNumber: (accountNumber) => `${customersApiEndPointBase}/subscription/accountnumber?accountnumber=${accountNumber}`, // Account number should be appended
    
    // GET ALL CUSTOMER LEADS
    getAllLeadsApi: `${leadsApiEndpointBase}`,
    // POST LEADS
    postLeadsApi: `${leadsApiEndpointBase}`,
    // PUT LEADS
    putsLeadsApi: `${leadsApiEndpointBase}`,

    // CUSTOMER LEADS WITH PHONE NUMBER
    getCustomerLeadApi: (mobileNumber) => `${leadsApiEndpointBase}/${mobileNumber}`,

    // SEND OTP
    sendOtpApi: `${leadsApiEndpointBase}/sendotp`,

    // VALIDATE OTP
    validateOtpApi: (otp, mobileNumber) => (`${leadsApiEndpointBase}/validateotp/${otp}/${mobileNumber}`),

    // PROFILE EXISTS
    leadProfileExists: `${leadsApiEndpointBase}/profileexists/${profileName}`,

    // MOBILE NUMBER EXISTS
    leadsMobileNumberExists: (mobileNumber, name) => `${leadsApiEndpointBase}/existing-lead?ProfileName=${name}&MobileNumber=${mobileNumber}`,

    // LOGIN CUSTOMER
    loginCustomer: `${leadsApiEndpointBase}/login`,

    // LEAD STATUS
    leadStatus: `${leadsApiEndpointBase}/status`,

    // DATE CREATED
    leadsDateCreated: `${leadsApiEndpointBase}/datecreated`,

    //VERIFY OLD PASSWORD
    confirmOldPassword: `${leadsApiEndpointBase}/verifyoldpassword`,

    /*
    * =============================================================
    * TRANSACTIONS API
    * ============================================================
    * */
    // GET MINI BANK TRANSACTION STATEMENTS
    transactionsApi: `${transactionApiEndpoints}/transactions`,

    // mini statement
    getMiniStatement: (accountNumber) => `${transactionsApi}/ministatement/${accountNumber}`,

    // GET FULL BANK TRANSACTION STATEMENTS
    getFullStatement: (accountNumber) => `${transactionsApi}/fullstatement/${accountNumber}`,

    /*
    * ============================================================
    * PAYMENT API
    * ============================================================
    * */
    // PAYMENTS API ENDPOINT
    paymentsApiEndPointBase: `${transactionApiEndpoints}/payments`,

    // WITHDRAW API
    withdrawApiEndPoint: `${transactionApiEndpoints}/payments`,

    // DEPOSIT API
    depositApiEndPoint: `${transactionApiEndpoints}/payments`,

    // PAYMENT TYPES
    getPaymentTypesApi: `${paymentsApiEndPointBase}/payment-types`,

    // VERIFY TRANSACTION NUMBER
    verifyTransactionNumber: `${paymentsApiEndPointBase}/verifynumber`,

    // PAYMENT STATUS
    getPaymentStatus: `${paymentsApiEndPointBase}/paymentstatus?transactionId=${transactionId}`,

    /*
    * #######################
    * #### LOYALTIES API ####
    * #######################
    *  */
    // REWARDS API ENDPOINT
    loyaltyApi: `${rewardApiEndpoints}/LoyaltyAPI`,

    // GET PREVIOUS WINNER
    getPreviousWinner: `${loyaltyApi}/PreviousWinner`,

    // GET CURRENT WINNER
    getCurrentWinner: `${loyaltyApi}/CurrentWinner`,

    // ADD CUSTOMER POINTS
    addCustomerPoints: `${loyaltyApi}/AddCustomerPoint`,

    // GET CUSTOMER POINTS
    // const getCustomerPoints = `${loyaltyApi/GetCustomerPoints`;
    getCustomerPoints: (accountNumber) => `${loyaltyApi}/GetCustomerPoints?accountNumber=${accountNumber}`,

    // GET TICKETS
    getTickets: `${loyaltyApi}/GetTickets`,

    /*
    * #####################################
    * ######## DRAW API ###################
    * #####################################
    * */
    // DRAW API ENDPOINTS

    // GET ALL DRAWS
    getDraws: `${drawApiEndpointBase}/DrawAPI`,

    // GET DRAW
    getDraw: `${drawApiEndpointBase}/DrawAPI/${drawId}`,

    // GET DRAW PRIZES
    getDrawPrizes: `${drawApiEndpointBase}/DrawAPI/prizes/${drawId}`,

    //GET ACTIVE DRAW
    getActiveDraw: `${drawApiEndpointBase}/DrawAPI/active`,

    // POST DRAW
    postDraw: `${drawApiEndpointBase}/DrawAPI`,

    // PUT DRAW
    putDraw: `${drawApiEndpointBase}/DrawAPI`,

    // GET ALL WINNERS
    getDrawWinners: `${getDraws}/winners`,

    // GET SPECIFIC DRAW WINNERS
    getSpecificDrawWinners: `${getDraws}/winners/${drawId}`,

    getCustomerWinApi: `${drawApiEndpointBase}/DrawAPI/winner/${accountNumber}`,

    /*
    * #####################################
    * ######## TRANSACT API ###################
    * #####################################
    * */

    // GET SORT CODES
    getSortCodes: `${transactionServicesEndpoints}/transactions/sortcodes`,

    // GET PAYMENT TYPES
    getPaymentTypes: `${transactionServicesEndpoints}/payments/payment-types`,

    // VERIFY ACCOUNT
    verifyAccount: `${transactionServicesEndpoints}/transactions/verifyaccount`,

    // TRANSACT
    transact: `${transactionServicesEndpoints}/transactions/transact`,

    /*
    * #####################################
    * ######## FAVORITES ##################
    * #####################################
    * */
    // FAVOURITES
    favorites: `${transactionServicesEndpoints}/transactions`,

    // GET FAVORITES
    getFavorites: (accountNumber) => `${favorites}/favourites/${accountNumber}`,

    // DELETE FAVORITES
    deleteFavorite: `${favorites}/removefavourite/${id}`,

    // ADD FAVORITE
    addFavorite: `${favorites}/createfavourite`,


    /*
    * #####################################
    * ######## BILLERS API ################
    * #####################################
    * */

    // GET BILLERS
    getBillers: `${transactionServicesEndpoints}/transactions/billers`,

    // PAY BILL
    payBill: `${transactionServicesEndpoints}/transactions/paybill`,


    // DELETE ACCOUNT
    deleteAccount: (leadId) => `${customersApiEndPointBase}/deletecustomer/${leadId}`,
}





