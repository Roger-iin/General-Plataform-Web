import type { ReactNode } from "react"

type LabelLoginProps = {
    children: ReactNode
}

export function LabelLogin({children}: LabelLoginProps) {
    return (
        <label className="block text-sm font-medium">
            {children}
        </label>
    )
}