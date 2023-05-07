type PaginationProps = {
    currentPage: number;
    onChange: (pageNumber: number) => void
}

function Pagination({ currentPage, onChange }: PaginationProps) {
    return (
        <div className="flex items-center justify-center space-x-2 text-slate-200">
            {currentPage > 1 && <div className="cursor-pointer w-10 h-10 text-slate-200 hover:bg-slate-200 hover:text-slate-800 p-4 inline-flex items-center font-medium rounded-full transition-all" onClick={() => onChange(currentPage - 1)}>
                «
            </div>}
            <div className="w-10 h-10 p-4 inline-flex items-center font-medium rounded-full cursor-pointer">{currentPage}</div>
            <div className="cursor-pointer w-10 h-10 text-slate-200 hover:bg-slate-200 hover:text-slate-800 p-4 inline-flex items-center font-medium rounded-full transition-all" onClick={() => onChange(currentPage + 1)}>
                »
            </div>
        </div>
    )
}

export default Pagination