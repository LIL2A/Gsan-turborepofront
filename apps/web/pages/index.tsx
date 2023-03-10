import React from 'react'
import { Home, LogoInicial } from "ui"
import LoginForm from 'ui/organismos/LoginForm'

const index = () => {
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

export default index