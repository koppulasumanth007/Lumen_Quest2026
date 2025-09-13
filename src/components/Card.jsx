import { clsx } from 'clsx'

export function Card({ className, children, ...props }) {
    return (
        <div
            className={clsx(
                'rounded-2xl border border-white/10 bg-slate-800/70 p-6 shadow-sm transition-colors hover-glow',
                className,
            )}
            {...props}
        >
            {children}
        </div>
    )
}

export function CardHeader({ className, children }) {
    return <div className={clsx('mb-3', className)}>{children}</div>
}

export function CardTitle({ className, children }) {
    return <h3 className={clsx('text-lg font-semibold text-white', className)}>{children}</h3>
}

export function CardDescription({ className, children }) {
    return <p className={clsx('text-sm text-slate-300', className)}>{children}</p>
}
