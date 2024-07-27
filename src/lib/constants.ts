export enum FeelFreePayBankCodes {
  KPLUS = "004",
  SCB_EASY = "014",
  KMA = "025",
  BBL = "002",
  KTB = "006",
}

export enum FeelFreePayChannels {
  QR_CASH = "QR_CASH",
  LINEPAY = "LINEPAY",
  TRUEWALLET = "TRUEWALLET",
  SHOPEEPAY = "SHOPEEPAY",
  WECHAT = "WECHAT",
  ALIPAY = "ALIPAY",
  MOBILE_BANKING = "MOBILE_BANKING",
}

export enum FeelFreePayEnv {
  PROD = "https://api.feelfreepay.com",
  TEST = "https://api.feelfreepay.com",
}

export enum FeelFreePayApiUrl {
  QR_CASH = "/v3/qrcode/text",
  LINEPAY = "/v2/linepay",
  TRUEWALLET = "/v2/trueWallet",
  SHOPEEPAY = "/v1/shopeePay",
  WECHAT = "/v2/wechat",
  ALIPAY = "/alipay/api/alipay",
  MOBILE_BANKING = "/v2/mobileBanking",
}

interface FeelFreePayBaseOptions {
  amount: string | number;
  referenceNo: string;
  backgroundUrl?: string;
  detail?: string;
  customerName?: string;
  customerEmail?: string;
  merchantDefined1?: string;
  merchantDefined2?: string;
  merchantDefined3?: string;
  merchantDefined4?: string;
  merchantDefined5?: string;
  customerTelephone?: string;
  customerAddress?: string;
}

interface FeelFreePayQrCashOptions extends FeelFreePayBaseOptions {
  // token: string
}

interface FeelFreePayTrueWalletOptions extends FeelFreePayBaseOptions {
  // publicKey: string
  backgroundUrl: string;
  responseUrl: string;
  customerTelephone: string;
  // checksum: string
}

interface FeelFreePayLinePayOptions extends FeelFreePayBaseOptions {
  // publicKey: string
  detail: string;
  responseUrl: string;
  // checksum: string
  rememberWithToken?: string;
}

interface FeelFreePayShopeePayOptions extends FeelFreePayBaseOptions {
  // publicKey: string
  backgroundUrl: string;
  responseUrl: string;
  // checksum: string
}

interface FeelFreePayWechatOptions extends FeelFreePayBaseOptions {
  // publicKey: string
  backgroundUrl: string;
  detail: string;
  // checksum: string
}

interface FeelFreePayAlipayOptions extends FeelFreePayBaseOptions {
  // publicKey: string
  backgroundUrl: string;
  detail: string;
  // checksum: string
}

interface FeelFreePayMobileBankingOptions extends FeelFreePayBaseOptions {
  backgroundUrl: string;
  responseUrl: string;
  bankCode: FeelFreePayBankCodes;
}

interface FeelFreePayQrCashResponse {
  referenceNo: string;
  qrcode: string;
  resultCode: string;
  ffpReferenceNo: string;
  resultMessage: string;
}

export interface MerchantInfo {
  currency_code: string;
  currency_code_th: string;
  currency_iso: string;
  currency_iso_th: string;
  currency_sign: string;
  currency_sign_th: string;
  display_theme: string;
  display_color: string;
  merchantId: number;
  merchant_address_1: string;
  merchant_address_2: string;
  merchant_address_1_th: string;
  merchant_address_2_th: string;
  merchant_companyname: string;
  merchant_companyname_th: string;
  merchant_conditions: string;
  merchant_logo: string;
  merchant_phone: string;
  merchant_taxid: string;
  merchant_website: string;
}

export interface ShortMerchantInfo {
  merchantId: string;
  initialShop: string;
  merchantName: string;
}

export type FeelFreePayOptions<T> = T extends FeelFreePayChannels.QR_CASH
  ? FeelFreePayQrCashOptions
  : T extends FeelFreePayChannels.LINEPAY
  ? FeelFreePayLinePayOptions
  : T extends FeelFreePayChannels.TRUEWALLET
  ? FeelFreePayTrueWalletOptions
  : T extends FeelFreePayChannels.SHOPEEPAY
  ? FeelFreePayShopeePayOptions
  : T extends FeelFreePayChannels.WECHAT
  ? FeelFreePayWechatOptions
  : T extends FeelFreePayChannels.ALIPAY
  ? FeelFreePayAlipayOptions
  : T extends FeelFreePayChannels.MOBILE_BANKING
  ? FeelFreePayMobileBankingOptions
  : never;

export type FeelFreePayResponse<T> = T extends FeelFreePayChannels.QR_CASH
  ? FeelFreePayQrCashResponse
  : T extends FeelFreePayChannels.LINEPAY
  ? string
  : T extends FeelFreePayChannels.SHOPEEPAY
  ? string
  : any;
