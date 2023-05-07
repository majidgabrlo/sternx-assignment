type CryptoNameAndLogoProps = {
    name: string
    symbol: string
    logoImage: string
}
function CryptoNameAndLogo({ logoImage, name, symbol }: CryptoNameAndLogoProps) {
    return (
        <td>
            <div className="flex items-center gap-x-3">
                <img className="w-6" src={logoImage} alt={symbol} />
                <div className="text-left">
                    <div className="capitalize text-slate-200 font-bold">{name}</div>
                    <div className="uppercase text-xs text-slate-400">{symbol}</div>
                </div>
            </div>
        </td>
    )
}

export default CryptoNameAndLogo