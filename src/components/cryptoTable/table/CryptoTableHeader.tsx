function CryptoTableHeader() {
    return (
        <thead className="uppercase text-slate-400 text-xs">
            <tr>
                <th className="pr-4">#</th>
                <th className="text-left">coins</th>
                <th>price</th>
                <th>24h</th>
                <th>market cap</th>
                <th>total volume</th>
                <th>circulating supply</th>
            </tr>
        </thead>
    )
}

export default CryptoTableHeader