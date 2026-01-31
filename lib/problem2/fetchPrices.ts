import { Token, TokenPrice } from "./types";

const PRICE_URL = "https://interview.switcheo.com/prices.json";

export const fetchToken = async ():Promise<Token[]> => {
    const response = await fetch(PRICE_URL); 
    const data = await response.json(); 

    const unique = new Map<string, Token>();

    data.forEach((item: TokenPrice) => {
        if (item.price && !unique.has(item.currency)) {
        unique.set(item.currency, {
            symbol: item.currency,
            price: item.price,
            icon: `https://raw.githubusercontent.com/Switcheo/token-icons/main/tokens/${item.currency}.svg`,
        });
        }
    });

    return Array.from(unique.values());
}