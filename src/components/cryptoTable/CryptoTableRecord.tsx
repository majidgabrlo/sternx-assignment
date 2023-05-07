import { numberTransformer } from '../../utils/numberTransfors'
import CryptoNameAndLogo from './recordFields/CryptoNameAndLogo'
import CryptoPercentage from './recordFields/CryptoPercentage'
export type CryptoType = {
    number: number,
    name: string,
    current_price: number,
    price_change_percentage_24h: number,
    market_cap: number,
    total_volume: number,
    circulating_supply: number
    symbol: string
    image: string
}

function CryptoTableRecord({ circulating_supply, current_price, market_cap, name, number, price_change_percentage_24h, symbol, total_volume, image }: CryptoType) {
    return (
        <tr className='!border-b border-slate-500 text-sm h-16'>
            <td className='pr-4 text-slate-500 text-xs'>{number}</td>
            <CryptoNameAndLogo symbol={symbol} logoImage={image} name={name} />
            <td className='font-semibold'>${numberTransformer(current_price)}</td>
            <td><CryptoPercentage percentage={price_change_percentage_24h} /></td>
            <td>${numberTransformer(market_cap)}</td>
            <td>${numberTransformer(total_volume)}</td>
            <td>{circulating_supply} <span className='uppercase text-slate-500 text-xs'>{symbol}</span></td>
        </tr>
    )
}

export default CryptoTableRecord