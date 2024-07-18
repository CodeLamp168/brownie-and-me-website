import instagramSrc from "/instagram.svg"
import messengerSrc from "/messenger.svg"


export default function Footer() {

    const SocialDisplay =({ socialSrc, socialName }) => {
        return( 
            <div className={`${socialName}-logo-box social-logo-box`}>
                <img className="social-logo" src={socialSrc} alt={socialName} />
            </div>
        )
    }


    function FooterText() {

        return(
            <div className="footer-text">
              <h2>Induldge in delightful treats</h2>
               <a href="#">johndoe@placeholderemail.com</a>
            </div>
        )
  
    }

    function SocialBox(){
        
        return(
           <div className="social-box">
            <SocialDisplay socialSrc={messengerSrc} socialName={'messenger'}/>
            <SocialDisplay socialSrc={instagramSrc} socialName={'instagram'}/>
           </div>
        )
      
    }

    return(
        <section className="footer-section layout-section">
          <FooterText/>
          <SocialBox/>
        </section>
    )
}