import { ChangeEvent, useState } from "react"

interface InputLoginTeam2Props{
    id?: string
    placeholder: string
    type: string
}

export const InputLoginTeam2 = ({type, placeholder, id}: InputLoginTeam2Props) => {

    const [estado, setEstado] = useState("")

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEstado(event.target.value)
    }

    return (
        <div>
            <input
                type={type}
                className="intro-x login__input form-control py-3 px-4 block mt-4"
                placeholder={placeholder}
                value={estado}
                onChange={handleEmailInput}
            />
        </div>
    );
}