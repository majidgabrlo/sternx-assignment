import CryptoTableContainer from "./components/cryptoTable/table/CryptoTableContainer";
import CryptoTableRecord from "./components/cryptoTable/table/CryptoTableRecord";

const data = [
  {
    "id": "bitcoin",
    "symbol": "btc",
    "name": "Bitcoin",
    "image": "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
    "current_price": 28652,
    "market_cap": 554548223075,
    "market_cap_rank": 1,
    "fully_diluted_valuation": 601344478100,
    "total_volume": 11088840301,
    "high_24h": 29741,
    "low_24h": 28628,
    "price_change_24h": -604.3230073970481,
    "price_change_percentage_24h": -2.06562,
    "market_cap_change_24h": -10760991720.571777,
    "market_cap_change_percentage_24h": -1.90356,
    "circulating_supply": 19365793,
    "total_supply": 21000000,
    "max_supply": 21000000,
    "ath": 69045,
    "ath_change_percentage": -58.06869,
    "ath_date": "2021-11-10T14:24:11.849Z",
    "atl": 67.81,
    "atl_change_percentage": 42595.48054,
    "atl_date": "2013-07-06T00:00:00.000Z",
    "roi": null,
    "last_updated": "2023-05-06T14:36:35.736Z"
  },
  {
    "id": "ethereum",
    "symbol": "eth",
    "name": "Ethereum",
    "image": "https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
    "current_price": 1878.24,
    "market_cap": 225744015940,
    "market_cap_rank": 2,
    "fully_diluted_valuation": 225744015940,
    "total_volume": 12109076404,
    "high_24h": 2008.76,
    "low_24h": 1876.01,
    "price_change_24h": -65.54132650985594,
    "price_change_percentage_24h": -3.37185,
    "market_cap_change_24h": -7622845258.249359,
    "market_cap_change_percentage_24h": -3.26646,
    "circulating_supply": 120357218.706435,
    "total_supply": 120357218.706435,
    "max_supply": null,
    "ath": 4878.26,
    "ath_change_percentage": -61.0788,
    "ath_date": "2021-11-10T14:24:19.604Z",
    "atl": 0.432979,
    "atl_change_percentage": 438415.0492,
    "atl_date": "2015-10-20T00:00:00.000Z",
    "roi": {
      "times": 86.63572220010747,
      "currency": "btc",
      "percentage": 8663.572220010747
    },
    "last_updated": "2023-05-06T14:36:40.729Z"
  }
]
function App() {
  return (
    <CryptoTableContainer>
      {data.map((item, i) => <CryptoTableRecord {...item} number={i+1} />)}
    </CryptoTableContainer>
  );
}

export default App;
