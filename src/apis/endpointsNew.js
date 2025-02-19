const customerUATBaseUrl = `https://solisapimanagement.azure-api.net`;
const customerBaseUrl = `https://solisgateway.azurewebsites.net/customer-service`;
// const transactionsBaseUrl = `https://solisapimanagement.azure-api.net/transactions`;
// const rewardBaseUrl = `https://solisapimanagement.azure-api.net/loyalty`;
// const transactBaseUrl = `https://solisapimanagement.azure-api.net/uat/transactionservices`;
const transactionsBaseUrl = `https://solisgateway.azurewebsites.net/transaction-service`;
const rewardBaseUrl = `https://solisgateway.azurewebsites.net/loyalty-service`;
const transactBaseUrl = `https://solisgateway.azurewebsites.net`;
const accountBaseUrl = `https://solisgateway.azurewebsites.net/account-service`;
const targetSaveBaseUrl = `https://solisgateway.azurewebsites.net/investment-service`;

const leadsApiEndpoints = `${customerBaseUrl}/lead`;
const customerApiEndpoints = `${customerBaseUrl}/customer`;
const transactionApiEndpoints = `${transactionsBaseUrl}/transaction`;
const rewardApiEndpoints = `${rewardBaseUrl}`;
const transactionServicesEndpoints = `${transactionsBaseUrl}/transaction`;
const customerAPIUATEndpoints = `${customerUATBaseUrl}/api`;
const accountsApiEndpoints = `${accountBaseUrl}/account`;
const targetSaveApiEndpoints = `${targetSaveBaseUrl}`;

const customerId = '';

// CUSTOMER SUBSCRIPTION ENDPOINT
const customersApiEndPointBase = `${customerApiEndpoints}`;

// GET ALL CUSTOMERS
const getAllCustomersApiEndPoint = `${customerApiEndpoints}`;

// POST A CUSTOMERS
const postCustomerApiEndPoint = `${customerApiEndpoints}`;

// POST A CUSTOMERS
const putCustomerApiEndPoint = `${customerApiEndpoints}`;

// DRAW API ENDPOINT
const drawApiEndPointBase = `${customerApiEndpoints}`;

const leadId = '';

const accountNumber = '';

/*
    * ==================================================================
    * LEADS API
    * ==================================================================
    * */
    // CUSTOMER LEADS API ENDPOINT
const leadsApiEndpointBase = `${leadsApiEndpoints}`;

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

const getDraws = `${drawApiEndpointBase}`;

const favorites = `${transactionApiEndpoints}/favourites`;

const paymentsApiEndPointBase = `${transactionApiEndpoints}/payments`;

const loyaltyApi = `${rewardApiEndpoints}/LoyaltyAPI`;

export const ROUTES = {
    // GET CUSTOMER API
    getCustomerApi: (mobileNumber) => `${customersApiEndPointBase}/customer-details/${mobileNumber}`,
    // DELETE CUSTOMER API
    deleteCustomerApi: `${customersApiEndPointBase}/${customerId}`,
    // GET CUSTOMER KYC
    deleteCustomerApi: `${customersApiEndPointBase}/${customerId}`,
    // GET CUSTOMER KYC
    customerKYCApi: `${customersApiEndPointBase}/customerkyc`,
    // REQUEST CUSTOMER KYC
    requestKYC: `${customersApiEndPointBase}/kyc-request`,
    // CUSTOMER EXISTS
    customerExists: `${customersApiEndPointBase}/customer-exists`,
    // CUSTOMER NIA DETAILS ENDPOINT
    customersNiaDetails: `${customersApiEndPointBase}/nia-details`,
    // CUSTOMER NIA DETAILS
    customerNiaDetails: `${customersNiaDetails}/${customerId}`,
    // VERIFY CUSTOMER
    verifyCustomer: `${customersApiEndPointBase}/verify-customer`,
    // GET CUSTOMER SUBSCRIPTION
    getCustomerDetails: (mobileNumber) =>  `${customersApiEndPointBase}/customer-details/${mobileNumber}`, // Append lead ID

    // GET ALL CUSTOMER LEADS
    getAllLeadsApi: `${leadsApiEndpointBase}`,
    // POST LEADS
    postLeadsApi: `${leadsApiEndpointBase}/create-lead`,
    // PUT LEADS
    putsLeadsApi: `${leadsApiEndpointBase}/update-lead`,

    // CUSTOMER LEADS WITH PHONE NUMBER
    getCustomerLeadApi: (mobileNumber) => `${leadsApiEndpointBase}/mobile-number/${mobileNumber}`,

    // SEND OTP
    sendOtpApi: (mobileNumber) => `${leadsApiEndpointBase}/send-otp/${mobileNumber}`,

    // VALIDATE OTP
    validateOtpApi: (otp, mobileNumber) => `${leadsApiEndpointBase}/validate-otp/${mobileNumber}/${otp}`,

    // PROFILE EXISTS
    leadProfileExists: (mobileNumber, name) => `${leadsApiEndpointBase}/existing-lead?ProfileName=${name}&MobileNumber=${mobileNumber}`,

    // MOBILE NUMBER EXISTS
    // leadsMobileNumberExists: (mobileNumber) => `${leadsApiEndpointBase}/mobilenumberexists/${mobileNumber}`,

    // LOGIN CUSTOMER
    loginCustomer: `${leadsApiEndpointBase}/login`,

    // LEAD STATUS
    leadStatus: `${leadsApiEndpointBase}/status`,

    // DATE CREATED
    leadsDateCreated: `${leadsApiEndpointBase}/datecreated`,

    //VERIFY OLD PASSWORD
    confirmOldPassword: `${leadsApiEndpointBase}/verifyoldpassword`,

    // RESET PIN
    resetPin: `${leadsApiEndpointBase}/forgot-pin`,

    // FORGOT PIN
    forgotPin: `${leadsApiEndpointBase}/reset-pin`,

    /*
    * =============================================================
    * TRANSACTIONS API
    * ============================================================
    * */
    // GET MINI BANK TRANSACTION STATEMENTS
    transactionsApi: `${transactionApiEndpoints}/transact`,

    // mini statement
    getMiniStatement: (accountNumber) => `${accountsApiEndpoints}/account-statement?AccountNumber=${accountNumber}&Type=MINI`,

    // GET FULL BANK TRANSACTION STATEMENTS
    getFullStatement: (accountNumber) => `${accountsApiEndpoints}/account-statement?AccountNumber=${accountNumber}&Type=FULL`,


    /*
    * ============================================================
    * PAYMENT API
    * ============================================================
    * */
    // PAYMENTS API ENDPOINT
    paymentsApiEndPointBase: `${transactionApiEndpoints}/pay-bill`,

    // WITHDRAW API
    // withdrawApiEndPoint: `${transactionApiEndpoints}/payments`,

    // DEPOSIT API
    // depositApiEndPoint: `${transactionApiEndpoints}/payments`,

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
    getDraws: `${drawApiEndpointBase}/draws`,

    // GET DRAW
    getDraw: (drawId) => `${drawApiEndpointBase}/draw/${drawId}`,

    // GET DRAW PRIZES
    getDrawPrizes: (drawId) => `${drawApiEndpointBase}/draw-prizes/${drawId}`,

    // GET DRAW TICKETS
    getDrawTickets: (drawId) => `${drawApiEndpointBase}/draw-tickets/${drawId}`,

    //GET ACTIVE DRAW
    getActiveDraw: `${drawApiEndpointBase}/DrawAPI/active`,

    // POST DRAW
    postDraw: `${drawApiEndpointBase}/DrawAPI`,

    // PUT DRAW
    putDraw: `${drawApiEndpointBase}/DrawAPI`,

    // GET ALL WINNERS
    getDrawWinners: `${getDraws}/last-draw-winners`,

    // GET SPECIFIC DRAW WINNERS
    getSpecificDrawWinners: `${getDraws}/draw-winners?Id=${drawId}&SourceSystem=MOBILE_APP`,

    getCustomerWinApi: `${drawApiEndpointBase}/draw-winner/${accountNumber}`,

    /*
    * #####################################
    * ######## TRANSACT API ###################
    * #####################################
    * */

    // GET SORT CODES
    getSortCodes: `${transactionApiEndpoints}/sort-codes`,

    // GET PAYMENT TYPES
    getPaymentTypes: `${transactionApiEndpoints}/payments/payment-types`,

    // VERIFY ACCOUNT
    verifyAccount: `${transactionApiEndpoints}/verify-account`,

    // TRANSACT
    transact: `${transactionApiEndpoints}/transact`,

    // CHARGE LOOKUP
    chargeLookup: `${transactionApiEndpoints}/charge-lookup`,

    // CANCEL FAVORITES
    cancelTransaction: (id) => `${favorites}/transaction/${id}`,

    /*
    * #####################################
    * ######## FAVORITES ##################
    * #####################################
    * */
    // FAVOURITES
    favorites: favorites,

    // GET FAVORITES
    getFavorites: (accountNumber) => `${favorites}/${accountNumber}`,

    // DELETE FAVORITES
    deleteFavorite: `${transactionApiEndpoints}/favourite/${id}`,

    // ADD FAVORITE
    addFavorite: `${transactionApiEndpoints}/create-favourite`,


    /*
    * #####################################
    * ######## BILLERS API ################
    * #####################################
    * */

    // GET BILLERS
    getBillers: `${transactionApiEndpoints}/billers`,

    // PAY BILL
    payBill: `${transactionApiEndpoints}/pay-bill`,


    // DELETE ACCOUNT
    deleteAccount: (leadId) => `${customerApiEndpoints}/customers/deletecustomer/${leadId}`,


    // TRANSACTION HISTORY
    transactionHistory: (accountNumber) => `${transactionApiEndpoints}/transaction-history/${accountNumber}`,

    /*
    * #####################################
    * ######## TARGET SAVINGS API #########
    * #####################################
    * */

    // GET TARGET SAVE GOALS
    getTargetSaveGoals: `${targetSaveApiEndpoints}/goal-options`,

    // GET CUSTOMER TARGET SAVE GOALS
    getCustomerTargetSaveGoals: (customerNumber) => `${targetSaveApiEndpoints}/customer-goals/${customerNumber}`,

    // CALCULATE PLAN
    calculatePlan: `${targetSaveApiEndpoints}/calculate-plan`,

    // CREATE TARGET SAVE
    createTargetSave: `${targetSaveApiEndpoints}/create-goal`,
}





