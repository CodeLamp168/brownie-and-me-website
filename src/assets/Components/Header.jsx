import { useState } from "react"

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false);

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

    
     function NavBtnOpen(){

        return(
            <button className="nav-button-open-box nav-button">
                <img className="nav-button-img" src="/nav-menu-open.svg" alt="404" />
            </button>
        )
    }

    function NavBtnClose(){

        return (
            <button className="nav-button-close-box nav-button">
                <img className="nav-button-display nav-closed-display-style"  src="/nav-menu-close.svg" alt="404" />
            </button>
        )
    }

    function NavBox(){


        return(
      
            <div className="nav-wrap nav-wrap-mobile">
                <nav className="nav-box">
                    <div className="nav-item nav-item-interactive-box"><h3>MENU</h3></div>
                    <div className="nav-item nav-item-interactive-box"><h3>DELIVERY</h3></div>
                </nav>
                <NavBtnClose/>
            </div>


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