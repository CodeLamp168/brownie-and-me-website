

export default function Header(){


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
            <nav className="nav-box">
                <div className="nav-item nav-item-interactive-box"><h3>MENU</h3></div>
                <div className="nav-item nav-item-interactive-box"><h3>DELIVERY</h3></div>
            </nav>
        )
    }

    return(

        <section className="header-section layout-section">
            <LogoBox/>
            <NavBox/>
        </section>
    )
}