import classnames from 'classnames'
import { ReactComponent as Arrow } from '../../../assets/arrow.svg'
function CryptoPercentage({ percentage }: { percentage: number }) {
    return (
        <div className="flex items-center justify-end gap-x-2">
            <Arrow role='arrow' className={classnames('w-3 h-3', {
                'fill-red-400 rotate-180': percentage < 0,
                'fill-green-400': percentage > 0,
            })} />
            <div className={classnames('text-sm', {
                "text-green-400": percentage > 0,
                "text-red-400": percentage < 0,
            })}>{percentage.toFixed(2)}%</div>
        </div>
    )
}

export default CryptoPercentage