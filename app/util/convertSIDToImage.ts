interface StripeIDImagePair {
  [name: string]: string;
}

const stripeIDImagePair: StripeIDImagePair = {
  price_1NaNwMJxcB1myVoNTi2ERe6n:
    "https://cb.scene7.com/is/image/Crate/TondoChopsticksSSS22/$web_pdp_main_carousel_med$/211116170028/tondo-chopsticks.jpg",
  price_1NbuPRJxcB1myVoNFQKh0Vuj:
    "https://cb.scene7.com/is/image/Crate/TondoChopsticksSSS22/$web_pdp_main_carousel_med$/211116170028/tondo-chopsticks.jpg",
};

export default function convertSIDToImage(id: string) {
  return stripeIDImagePair[id];
}
