import React from 'react'
import { LogoInicial } from "ui"
import LoginForm from 'ui/organismos/LoginForm'
import LoginFormYup from '../organismos/LoginFormYup'
//teste
const LoginNormal = () => {
  return (
    <div className="login">
        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">
                <LogoInicial/>
                <LoginForm/>
            </div>
        </div>
    </div>
  )
}

export default LoginNormal