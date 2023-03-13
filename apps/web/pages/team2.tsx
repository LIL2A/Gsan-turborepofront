import React from 'react'
import { LogoInicial } from "ui"
import LoginFormTeam2 from 'ui/organismos/LoginFormTeam2'

const index = () => {
  return (
    <div className="login">
        <div className="container sm:px-10">
            <div className="block xl:grid grid-cols-2 gap-4">
                <LogoInicial/>
                <LoginFormTeam2/>
            </div>
        </div>
    </div>
  )
}

export default index