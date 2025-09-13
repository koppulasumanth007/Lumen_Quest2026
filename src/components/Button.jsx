import { clsx } from 'clsx'

export default function Button({
    as: As = 'button',
    variant = 'primary',
    size = 'md',
    className,
    children,
    ...props
}) {
    const base = 'inline-flex items-center justify-center font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 transition-colors'
    const rounded = 'rounded-full'
    const sizes = {
        sm: 'text-sm px-3 py-1.5',
        md: 'text-sm px-5 py-2.5',
        lg: 'text-base px-6 py-3',
    }[size]

    const variants = {
        primary: 'text-white bg-gradient-to-b from-indigo-500 to-indigo-600 border border-indigo-500 hover:from-indigo-400 hover:to-indigo-500',
        secondary: 'text-white border border-white/20 bg-white/5 hover:bg-white/8 backdrop-blur',
        ghost: 'text-white/90 hover:text-white border border-transparent',
    }[variant]

    return (
        <As className={clsx(base, rounded, sizes, variants, className)} {...props}>
            {children}
        </As>
    )
}
