import { ReactNode } from "react"
import CryptoTableHeader from "./CryptoTableHeader"


function CryptoTableContainer({ children }: { children: ReactNode }) {
    return (
        <table className="table-auto text-right w-full">
            <CryptoTableHeader />
            <tbody>
                {children}
            </tbody>
        </table>
    )
}

export default CryptoTableContainer