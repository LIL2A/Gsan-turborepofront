import { BarraBusca, Logo, MenuNavegacao, Notificacoes } from "ui";


const Dashboard = () => {
    return(
        <div className="top-bar-boxed h-[70px] z-[51] relative border-b border-white/[0.08] mt-12 md:-mt-5 -mx-3 sm:-mx-8 px-3 sm:px-8 md:pt-0 mb-12">
            <div className="h-full flex items-center">
                <Logo/>
                <MenuNavegacao />
                <BarraBusca />
                <Notificacoes />
            </div>
        </div>
    )
}

export default Dashboard;