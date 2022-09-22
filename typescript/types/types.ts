export interface AccessToken {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
    scope: string;
  }
  
  export interface SetupResponse {
    commodities?: Commodity[];
    countries?: Country[];
    states?: State[];
    couriers?: Courier[];
    customers?: Customer[];
    currencyId?: string;
  }

  export interface Commodity {
    id?: string;
    name: string;
    createdAt?: string;
    deletedAt?: string;
    commodityGroups?: CommodityGroup[];
  }

  export interface CommodityGroup {
    id?: string;
    name: string;
    commodities?: object[];
    deletedAt?: string;
  }

  export interface Country {
    id?: string;
    name: string;
    code: string;
    deletedAt?: string;
    countryGroups?: CountryGroup[];
  }

  export interface CountryGroup {
    id?: string;
    name: string;
    countries?: object[];
    deletedAt?: string;
  }

  export interface State {
    id?: string;
    country?: Country;
    name: string;
    deletedAt?: string;
  }

  export interface Courier {
    id?: string;
    name: string;
    deletedAt?: string;
  }

  export interface Customer {
    id?: string;
    addressId?: string;
    reference?: string;
    passedCompliance?: boolean;
    type: number;
    organizationId?: string;
    email: string;
    name?: string;
    additionalEmail?: any;
    phone?: string;
    taxId?: string;
    businessName?: string;
    individualFirstName?: string;
    individualLastName?: string;
    deletedAt?: string;
  }

  export interface QuoteResponse {
    id: string;
    isPublic: true;
    commodityId: string;
    commodityDescription:  string;
    insuredValue: number;
    trackingCode:  string;
    originFormatted:  string;
    originStreet:  string;
    originState:  string;
    originPostcode:  string;
    originCity:  string;
    originCountry:  string;
    destinationFormatted:  string;
    destinationStreet:  string;
    destinationState:  string;
    destinationPostcode:  string;
    destinationCity:  string;
    destinationCountry:  string;
    startDate:  string;
    endDate:  string;
    transportType: number;
    courierId:  string;
    exitPortId:  string;
    entryPortId:  string;
    vesselId:  string;
    exitPort:  string;
    entryPort:  string;
    vessel:  string;
    bookingFee: number;
    bookingFeeType: number;
    customerId: string;
    customerType: number;
    customerOrganization: string;
    customerTaxId: string;
    customerForename: string;
    customerSurname: string;
    customerEmail: string;
    customerPhone: string;
    customerFormatted: string;
    customerStreet: string;
    customerCity: string;
    customerState: string;
    customerPostcode: string;
    customerCountry: string;
    customerReference: string;
    captcha: string;
  }

  export interface Booking {
    id: string;
    ownerId: string;
    events?: BookingEvent[];
    risk?: Risk;
    offer: Offer;
    reference: string;
    status: number;
    statusAt: string;
    exportedAt?: string;
    invoiceId?: string;
    invoicedAt?: string;
    purchasedAt?: string;
    transactionId?: string;
    createdAt?: string;
    deletedAt?: string;
  }

  export interface BookingEvent {
    id?: string;
    userId?: string;
    content: string;
    createdAt?: string;
  };

  export interface Risk {
    id?: string;
    organizationId?: string;
    customer?: Customer;
    commodityId?: string;
    commodityDescription?: string;
    originAddressId: string;
    destinationAddressId: string;
    courierId?: string;
    journeyLegs?: JourneyLeg[];
    startDate: string;
    endDate: string;
    trackingCode?: string;
    insuredValue: number;
    transportType: number;
    exitPortId?: string;
    entryPortId?: string;
    vesselId?: string;
  };

  export interface Offer {
    id?: string;
    policyRevision?: PolicyRevision;
    risk?: Risk;
    insurerPremium: number;
    technologyFee: number;
    bookingFee: number;
    insurerPremiumTax: number;
    technologyFeeTax: number;
    bookingFeeTax: number;
    accepted: boolean;
    amendments: any;
    createdAt: string;
    policyPricing?: PolicyPricing;
  };

  export type JourneyLeg = {
    id?: string;
    risk?: object;
    start: string;
    end: string;
    transportType: number;
    originAddressId: string;
    destinationAddressId: string;
    shape?: string;
    distance?: number;
  };

  export type PolicyRevision = {
    id?: string;
    policy: Policy;
    pricings?: PolicyPricing[];
    currencyId: string;
    bookingCode: string;
    createdAt: string;
    excludedCountries?: any;
    excludedStates?: any;
    includedCommodities?: any;
    requireConfirmation: boolean;
    allowPayInvoice?: boolean;
    allowPayCard?: boolean;
    confirmationIntro?: string;
    confirmationTerms?: string;
    hideCostBreakdown: boolean;
    type: string;
    underwriterId: string;
    commission?: number;
    wordingUrl?: string;
    deductibles?: PolicyDeductible[];
    deductibleUrl?: string;
    startDate: string;
    endDate: string;
    confirmEmailTemplateSenderName?: string;
    confirmEmailTemplateSenderEmail?: string;
    confirmEmailTemplateSubject?: string;
    confirmEmailTemplate?: string;
    purchaseEmailTemplateSenderName?: string;
    purchaseEmailTemplateSenderEmail?: string;
    purchaseEmailTemplateSubject?: string;
    purchaseEmailTemplate?: string;
    attachments?: PolicyAttachment[];
    notificationEmailTemplateSenderName?: string;
    notificationEmailTemplateSenderEmail?: string;
    notificationEmailTemplateSubject?: string;
    notificationEmailTemplate?: string;
    cancellationEmailTemplateSenderName?: string;
    cancellationEmailTemplateSenderEmail?: string;
    cancellationEmailTemplateSubject?: string;
    cancellationEmailTemplate?: string;
    completionEmailTemplateSenderName?: string;
    completionEmailTemplateSenderEmail?: string;
    completionEmailTemplateSubject?: string;
    completionEmailTemplate?: string;
    cancelNotificationTemplateSenderName?: string;
    cancelNotificationTemplateSenderEmail?: string;
    cancelNotificationTemplateSubject?: string;
    cancelNotificationTemplate?: string;
  };

  export interface PolicyPricing {
    id?: string;
    commodityGroupId?: string;
    originGroupId?: string;
    destinationGroupId?: string;
    transportType: number;
    maxInsuredValue: number;
    minimumPremium: number;
    basePrice: number;
  };

  export interface PolicyDeductible {
    id?: string;
    commodityGroupId: string;
    baseDeductibleAmount: number;
    baseDeductibleType: number;
  };

  export interface PolicyAttachment {
    id?: string;
    name: string;
    filename: string;
    url?: string;
    template?: string;
    email: number;
  };

  export interface Policy {
    id?: string;
    insurerId: string;
    organizationId?: string;
    name: string;
    revisions?: PolicyRevision[];
    externalReference?: string;
    deletedAt?: string;
    lastExportedAt?: string;
    exportMethod: number;
    exportInterval: number;
    exportEmailAddress?: string;
    exportSftpExportPath?: string;
    exportSftpUsername?: string;
    exportSftpPassword?: string;
    exportSftpPort?: number;
    exportSftpHost?: string;
  };