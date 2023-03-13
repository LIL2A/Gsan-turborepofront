import { ChangeEvent, useState } from "react"
import './InputLoginTeam2.css'

interface InputLoginTeam2Props{
    id?: string
    placeholder: string
    type: string
    status: string
}

export const InputLoginTeam2 = ({type, placeholder, id, status}: InputLoginTeam2Props) => {

    const [estado, setEstado] = useState("")

    const handleEmailInput = (event: ChangeEvent<HTMLInputElement>) => {
        setEstado(event.target.value)
    }

    return (
        <div>
            <input
                type={type}
                className={`intro-x login__input form-control py-3 px-4 block mt-4  status-${status}`}
                placeholder={placeholder}
                value={estado}
                onChange={handleEmailInput}
            />
        </div>
    );
}

InputLoginTeam2.defaultProps = {
    status: "dafault"
}