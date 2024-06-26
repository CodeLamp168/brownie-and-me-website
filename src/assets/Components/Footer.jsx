export default function Footer() {

  function FooterDivRight() {

    return (
        <>
        <div className="Footer-Right Footer-Div"> 
            <h2>A Delightful Treat</h2>
            <p>genericname@gmail.com</p>
        </div>
        </>
    )

   }
   function FooterDivLeft() {

    return (
        <>
        <div className="Footer-Left Footer-Div"> 
            <ul className="Footer-Social-Display">
                <img src="/instagram.svg" alt="404" className="instagram svg-logo" />
                <img src="/messenger.svg" alt="404" className="facebook svg-logo" />
            </ul>
        </div>
        </>
    )

   }

    return(
        <div className="footer-section">
            <FooterDivRight/>
            <FooterDivLeft/>
        </div>
    )
}