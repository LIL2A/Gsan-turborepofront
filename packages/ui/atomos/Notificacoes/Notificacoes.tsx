export const Notificacoes = () => {
    return(
        <div className="intro-x dropdown mr-4 sm:mr-6">
            <div className="dropdown-toggle notification notification--bullet cursor-pointer" role="button" aria-expanded="false" data-tw-toggle="dropdown">
                <i data-lucide="bell" className="notification__icon dark:text-slate-500"></i>
            </div>
            <div className="notification-content pt-2 dropdown-menu">
                <div className="notification-content__box dropdown-content">
                    <div className="notification-content__title">Notifications</div>
                    <div className="cursor-pointer relative flex items-center ">
                <div className="w-12 h-12 flex-none image-fit mr-1">
                    <img alt="Midone - HTML Admin Template" className="rounded-full" src="dist/images/profile-5.jpg"/>
            <div className="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>                    
    )
}