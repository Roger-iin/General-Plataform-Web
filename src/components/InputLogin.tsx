type InputLoginProps = {
    type: string
    value: string
    autocomplete: string
    placeholder: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export function InputLogin({ value, type, autocomplete, placeholder, onChange }: InputLoginProps) {
    return(
        <input
            type={type}
            required
            autoComplete={autocomplete}
            placeholder={placeholder}
            className="mt-1 block w-full rounded-2xl border border-white/20 bg-slate-900 p-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500"
            value={value}
            onChange={onChange}
        />
    )
}