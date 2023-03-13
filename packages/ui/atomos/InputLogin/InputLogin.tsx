import { ChangeEvent, useState } from "react"

export const InputEmail = () => {
    const [email, setEmail] = useState("")

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    return (
        <div>
            <input
                type="email"
                className="intro-x login__input form-control py-3 px-4 block mt-4"
                placeholder="Email"
                value={email}
                onChange={handleEmailInput}
            />
        </div>

    )
}

export const InputSenha = () =>{
    const [senha,setSenha] = useState("")

    const  handleSenhaInput = (event:ChangeEvent<HTMLInputElement>) =>{
        setSenha(event.target.value)
    }

    return(
        <div>
            <input
            type="password"
            className="intro-x login__input form-control py-3 px-4 block mt-4"
            placeholder="Senha"
            value={senha}
            onChange={handleSenhaInput}></input>
        </div>
    )
}

