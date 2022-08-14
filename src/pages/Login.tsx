import Cookies from "js-cookie";
import { FormEvent, useContext, useState } from "react"
import { Context } from "../Context/Context"

export const Login = () => {
    const { state, dispatch } = useContext(Context)
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        let urlencoded = new URLSearchParams();
        urlencoded.append("email", email);
        urlencoded.append("password", password);

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: urlencoded
        };

        let res = await fetch("https://murmuring-reef-63947.herokuapp.com/api/user/login", requestOptions);
        let json = await res.json();

        if (json.token) {
            Cookies.set('token', json.token);
            location.assign('/')
        }
    }

    console.log({ email, password })



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