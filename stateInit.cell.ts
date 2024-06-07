import { beginCell, Address } from "@ton/core";

const cell = beginCell()
    .storeAddress(Address.parse("EQD46vzwfB6w996qY7q6Uc3sZDH783AabQBZeE-w5WYEzgOX"))
    .storeCoins(8000000)
    .endCell();

export default cell;