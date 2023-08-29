// item types from firebase databases

export interface Option {
  option: string;
  stripeID: string;
}

export interface OptionSelect {
  label: string;
  value: string;
  stripeID: string;
}

export interface Item {
  image: string;
  itemID: string;
  itemName: string;
  optionType: OptionSelect;
  orderAmount: number;
  orderQuantity: number;
  stripeID: string;
}

export interface ItemQuantity {
  [key: string]: number;
}

// types for user carts

export interface ItemOrderContainerProps {
  userCart: Item[];
}

// types for item queries in api routes

export interface UserParams {
  userID: string;
}

export interface CartParams {
  errorMessage: string;
}

// params for queries

export interface SessionParams {
  sessionID: string;
}

export interface ItemQuery {
  itemID: string;
}

export interface Query {
  category: string;
}

// stripe types

export interface StripeItem {
  id: string;
  object: string;
  amount_discount: number;
  amount_subtotal: number;
  amount_tax: number;
  amount_total: number;
  currency: string;
  description: string;
  price: PriceObject;
  quantity: number;
}

export interface PriceObject {
  billing_scheme: string;
  id: string;
}

export interface OrderObject {
  data: StripeItem[];
  orderTimestamp: string;
  orderID: string;
}
