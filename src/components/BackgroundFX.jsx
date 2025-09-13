export default function BackgroundFX() {
    return (
        <div className="pointer-events-none fixed inset-0 -z-10">
            {/* Top radial accent */}
            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(99,102,241,0.12),transparent_70%)]" />

            {/* Subtle grid overlay */}
            <svg
                className="absolute inset-0 h-full w-full opacity-[0.18]"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(148,163,184,0.16)" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Bottom radial accent */}
            <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_100%,rgba(99,102,241,0.08),transparent_70%)]" />

            {/* Vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/40" />
        </div>
    )
}
