export const BarraBusca = () =>{
    return(
        <div className="intro-x relative mr-3 sm:mr-6">
            <div className="search hidden sm:block">
                <input type="text" className="search__input form-control border-transparent" placeholder="Search..."/>
                <i data-lucide="search" className="search__icon dark:text-slate-500"></i> 
            </div>       
        </div>
    )
}