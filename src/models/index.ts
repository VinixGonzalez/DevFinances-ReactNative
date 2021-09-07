export type Currency = "BRL" | "USD" | "GBR" | "EUR";

export interface CurrencyData {
  from: Currency;
  to: Currency;
  amount: number;
}

export interface ConvertResponseType {
  motd: {
    msg: string;
    url: string;
  };
  success: boolean;
  query: {
    from: Currency;
    to: Currency;
    amount: number;
  };
  info: {
    rate: number;
  };
  historical: boolean;
  date: string;
  result: number;
}

export interface Store {
  currency: CurrencyData;
}
