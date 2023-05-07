import classNames from 'classnames'
function SelectBox({ children, className = "", ...props }: React.ComponentPropsWithoutRef<"select">) {

    return (
        <select className={classNames("py-3 px-4 pr-9 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400", className)} {...props}>
            {children}
        </select>
    )
}

export default SelectBox