
import { render, screen } from '@testing-library/react';
import Cryptos from '../Cryptos';
import { rest } from 'msw';
import { cryptos, currency } from './data'
import { QueryClient, QueryClientProvider } from 'react-query';
import { setupServer } from 'msw/node'

const server = setupServer(
    // returns 2 coins
    rest.get('https://api.coingecko.com/api/v3/coins/markets', (req, res, ctx) => {
        return res(
            ctx.json(cryptos),
        )
    }),

    // returns 6 currencies
    rest.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies', (req, res, ctx) => {
        return res(
            ctx.json(currency),
        )
    }),
)

beforeAll(() => {
    server.listen()
})

afterAll(() => {
    server.close()
})


const queryClient = new QueryClient()

test('renders 2 crypro on screen after request', async () => {
    render(<QueryClientProvider client={queryClient}><Cryptos /></QueryClientProvider>);
    const rows = await screen.findAllByRole("row")
    // 1 row is the header of table
    expect(rows.length).toBe(3)
});

test('renders 6 currency on screen after request', async () => {
    render(<QueryClientProvider client={queryClient}><Cryptos /></QueryClientProvider>);
    const options = await screen.findAllByRole("option")
    expect(options.length).toBe(6)
});
