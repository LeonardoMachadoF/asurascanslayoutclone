import { FormEvent, useContext, useState } from "react"
import { Context } from "../Context/Context"
import { useApi } from "../libs/useApi";

export const Login = () => {
    const { state } = useContext(Context)
    const api = useApi();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let succeess = await api.doLogin(email, password);
        if (!succeess) {
            console.log('Email e/ou senha incorreto!')
        }
    }

    return (
        <div className={`flex-1 flex justify-center`}>
            <form onSubmit={handleSubmit} className="mt-[20%] h-[300px] w-[600px] flex flex-col items-center">
                <div className="p-2">
                    <label className={`block`}>E-Mail</label>
                    <input type="email" onChange={e => setEmail(e.target.value)} className={`${state.theme.mainColor} h-8 p-2 mt-1 w-[300px]`} />
                </div>
                <div className="p-2">
                    <label className={`block`}>Senha</label>
                    <input type="password" onChange={e => setPassword(e.target.value)} className={`${state.theme.mainColor} h-8 p-2 mt-1 w-[300px]`} />
                </div>
                <div>
                    <input type="submit" value="Entrar" className="cursor-pointer pt-2 pb-2 pl-5 pr-5 mt-4 rounded bg-black bg-opacity-50" />
                </div>
            </form>
        </div>
    )
}