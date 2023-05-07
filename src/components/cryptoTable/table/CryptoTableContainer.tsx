import { ReactNode } from "react"
import CryptoTableHeader from "./CryptoTableHeader"


function CryptoTableContainer({ children }: { children: ReactNode }) {
    return (
        <table className="table-auto w-[90%] mx-auto text-right">
            <CryptoTableHeader />
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default CryptoTableContainer