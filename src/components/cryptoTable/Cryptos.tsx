import { useQuery } from 'react-query'
import CryptoTableContainer from "./CryptoTableContainer"
import CryptoTableRecord, { CryptoType } from "./CryptoTableRecord"
import { useState } from 'react';
import { AxiosError } from 'axios'
import { axiosClient } from '../../axios/axiosClient';
import SelectBox from '../UI/SelectBox';
import Pagination from '../UI/Pagination';


function Cryptos() {
    const [page, setPage] = useState(1)
    const [symbol, setSymbol] = useState("usd")

    const { data: symbols } = useQuery<string[]>(
        "symbols",
        async () => (await axiosClient.get<string[]>("/simple/supported_vs_currencies")).data,
        {
            initialData: [],
        }
    );

    const { data: cryptos, error,isFetching } = useQuery<CryptoType[], AxiosError>(
        ["cryptos", page, symbol],
        async () => (await axiosClient.get<CryptoType[]>(`/coins/markets?vs_currency=${symbol}&page=${page}&per_page=20&price_change_percentage`)).data,
        {
            initialData: [],
        }
    );

        
    return (
        <div className='mt-8 w-[90%] mx-auto'>
            <div className='flex justify-end mb-5'>
                <SelectBox className='w-2/12' value={symbol} onChange={(e) => { setSymbol(e.target.value); setPage(1) }}>
                    {symbols?.map(s => <option key={s} className='uppercase' value={s}>{s.toLocaleUpperCase()}</option>)}
                </SelectBox>
            </div>
            {error && !isFetching && <div className='text-red-400 text-center'>{error.message}</div>}
            {isFetching && <div className='text-center'>Loading...</div>}
            {!!cryptos?.length && <>
                <CryptoTableContainer>
                    {cryptos?.map((item, i) => <CryptoTableRecord key={item.symbol} {...item} number={i + 1} />)}
                </CryptoTableContainer>
                <Pagination currentPage={page} onChange={(number) => { setPage(number); }} />
            </>}
        </div>
    )
}

export default Cryptos