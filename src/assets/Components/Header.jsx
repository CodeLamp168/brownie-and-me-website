export default function Header(){

    function Logo(){

        return(
            <h2 className="head-logo">Brownie And Me</h2>
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