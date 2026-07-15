export function AuthLoading() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
            <div className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-lg">
                <div className="relative mb-6 flex h-16 w-16 items-center justify-center">
                    <div className="absolute h-16 w-16 rounded-full border-4 border-slate-200" />

                    <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-transparent border-t-blue-600" />

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            className="h-5 w-5 text-blue-600"
                            aria-hidden="true"
                        >
                            <path
                                d="M12 3L4 7V12C4 17 7.4 21.7 12 23C16.6 21.7 20 17 20 12V7L12 3Z"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />

                            <path
                                d="M9 12L11 14L15 10"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>
                </div>

                <h1 className="text-xl font-semibold text-slate-900">
                    Verificando autenticação
                </h1>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    Estamos validando sua sessão. Isso deve levar apenas alguns
                    instantes.
                </p>

                <div className="mt-6 flex items-center gap-1.5">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-600 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-blue-600" />
                </div>
            </div>
        </div>
    );
}