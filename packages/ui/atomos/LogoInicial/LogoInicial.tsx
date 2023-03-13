import '../LogoInicial/LogoInicia.css'

export const LogoInicial = () => {
    return (
        <div className="hidden xl:flex flex-col min-h-screen">
        <a href="" className="-intro-x flex items-center pt-5">                     
            <span className="text-white text-lg ml-3"> GSAN 4.0 </span> 
        </a>
        <div className="my-auto images-consenso-container">
            <img src="/imagens/Consenso_Marca_4.png" className="-intro-x w-1/2 -mt-16" width="95" height="95"/>
          
            <div id="tecnologia-text" className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                Tecnologia     
            </div>                      
        </div>
    </div>
    )
}

