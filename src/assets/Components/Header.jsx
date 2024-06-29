export default function Header(){

    function Logo(){

        return(
            <h2 className="head-logo">Brownie and Me</h2>
        )
    }

    function NavButton(){

        return(
            <div className="navBurgerOpen">
                <img src="#" alt="404" />
            </div>
        )
    }

    function HeaderList(){

        return (
        <nav className="header-nav">
            <ul className="header-list">
                <a>Menu</a>
                <a>Order & Delivery</a>
            </ul>
        </nav>
        )
       
    }

    return(

        <div className="Header">
            <Logo />
            <HeaderList />
        </div>
    )
}