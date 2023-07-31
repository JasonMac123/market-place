export interface OptionSelect {
  label: string;
  value: string;
}

export interface Item {
  image: string;
  itemID: string;
  itemName: string;
  optionType: OptionSelect;
  orderAmount: number;
  orderQuantity: number;
}

export interface ItemOrderContainerProps {
  userCart: Item[];
}

export interface UserParams {
  userID: string;
}

export interface ItemQuery {
  itemID: string;
}

export interface ItemQuantity {
  [key: string]: number;
}
