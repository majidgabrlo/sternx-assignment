import { QueryClient, QueryClientProvider } from "react-query";
import Cryptos from "./components/Cryptos";


const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Cryptos />
    </QueryClientProvider>
  );
}

export default App;
