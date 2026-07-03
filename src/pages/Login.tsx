import { useState, type FormEvent } from "react";
import { useAuth } from "../hooks/useAuth";
import { LabelLogin } from "../components/LabelLogin";
import { InputLogin } from "../components/InputLogin";
import { useNavigate } from "react-router-dom";


export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = useAuth();
    const navigate = useNavigate();

    async function handleLogin(e: FormEvent) {
        e.preventDefault();

        try {
            await signIn(email, password)
            navigate('/dashboard')
        } catch (error) {
            alert('Falha no login. Verifique suas credenciais')
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-slate-950">
            <div className="flex items-stretch w-full justify-center">
                <div className="hidden md:flex rounded-l-2xl p-10 bg-linear-to-br from-violet-600 via-fuchsia-500 to-cyan-400" />
                <div className="max-w-md rounded-r-2xl bg-slate-900 p-8 border-2 border-gray-700 shadow-md text-white">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold ">
                            Entrar na conta
                        </h2>
                        <p className="text-gray-300">
                            Preencha com seus dados para acessar sua conta
                        </p>
                    </div>

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <LabelLogin>
                                E-mail
                            </LabelLogin>
                            <InputLogin
                                type="email"
                                autocomplete="email"
                                placeholder="example@email.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div>
                            <LabelLogin>
                                Senha
                            </LabelLogin>
                            <InputLogin
                                type="password"
                                autocomplete="current-password"
                                value={password}
                                placeholder="••••••••"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-linear-to-r from-cyan-400/60 to-violet-500/90 py-2 px-4 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors hover:cursor-pointer"
                        >
                            Entrar
                        </button>

                        <div className="text-center text-sm">
                            <p className="">
                                Ainda não tem conta? <a href="" className="text-cyan-400">Criar conta</a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}