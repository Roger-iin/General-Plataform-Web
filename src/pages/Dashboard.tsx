import { useAuth } from "../hooks/useAuth"


export function Dashboard() {
    const { user, signOut } = useAuth();

    return (
        <div className="flex min-h-screen flex-col bg-gray-100 p-8">
            <header className="mb-8 flex items-center justify-between rounded-lg bg-white p-6 shadow-sm">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800"> Dashboard</h1>
                    <p className="text-gray-600">Bem-vindo, {user?.email}</p>
                </div>

                <button 
                    onClick={signOut}
                    className="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 transition-colors" >
                    Sair
                </button>
            </header>

            <main className="rounded-lg bg-white p-6 shadow-sm min-h-[60vh]">
                <h2 className="text-xl font-semibold text-gray-700">Área restrita</h2>
                <p className="mt-4 text-gray-500">
                    Se você está vendo esta tela, significa que seu token JWT é válido e sua requisição passou pelo AuthGuard do NestJS!
                </p>
            </main>
        </div>
    )
}