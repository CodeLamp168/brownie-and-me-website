

export default function Header(){

     function NavBtnOpen(){

        return(
            <div className="nav-button-open-box">
                <img className="nav-button-img" src="/nav-menu-open.svg" alt="404" />
            </div>
        )
    }

    function NavBtnClose(){

        return (
            <div className="nav-button-close-box">
                <img className="nav-button-display nav-closed-display-style"  src="/nav-menu-close.svg" alt="404" />
            </div>
        )
    }

    function LogoBox(){

        return(
            <div className="logo-box">
                <div className="logo-img">
                    <img src="#" alt="404" />
                </div>
                <h2 className="logo-name">BROWNIE AND ME</h2>
            </div>
        )
    }

    function NavBox(){


        return(
            <>
            <nav className="nav-box">
                <div className="nav-item nav-item-interactive-box"><h3>MENU</h3></div>
                <div className="nav-item nav-item-interactive-box"><h3>DELIVERY</h3></div>
            </nav>

            <NavBtnClose/>
            </>
        )
    }

    return(

        <section className="header-section layout-section">
            <LogoBox/>
            <NavBox/>
            <NavBtnOpen/>
        </section>
    )
}