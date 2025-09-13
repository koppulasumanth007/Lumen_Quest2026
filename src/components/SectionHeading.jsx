import { clsx } from 'clsx'

export default function SectionHeading({ title, subtitle, align = 'center', className }) {
    return (
        <div className={clsx('mx-auto max-w-3xl', align === 'center' ? 'text-center' : 'text-left', className)}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{title}</h2>
            {subtitle && <p className="mt-3 text-slate-300">{subtitle}</p>}
        </div>
    )
}
