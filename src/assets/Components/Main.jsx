import cookieImg from '/product-imgs/cookies.jpg'
import brownieImg from '/product-imgs/brownie.jpg'
import lemonloafImg from '/product-imgs/lemon-loaf.jpg'
import muffinImg from '/product-imgs/muffin.jpg'

export default function Main(){

    function HeroGallery(){

        const HeroDisplayItems = ({ productImg, productName, productText}) => {
            return(
                <div className="hero-product-item">
                    <img src={productImg} alt="404" />

                    <div className="product-text-content">
                        <h2>{productName}</h2>
                        <p>{productText}</p>
                    </div>
                </div>
            )
        }

        return(
            <div className="hero-product-gallery-wrap">
                 <HeroDisplayItems 
                productName="Cookie" 
                productImg={cookieImg} 
                productText={undefined} 
            />
            <HeroDisplayItems 
                productName="Donut" 
                productImg={lemonloafImg} 
                productText={undefined} 
            />
            <HeroDisplayItems 
                productName="Muffin" 
                productImg={muffinImg} 
                productText={undefined} 
            />
            <HeroDisplayItems 
                productName="Brownie" 
                productImg={brownieImg} 
                productText={undefined} 
            />
            </div>
        )
    }

    function HeroContentWrap(){

        return(
            <div className="hero-content-wrap">
                <HeroGallery/>
                <HeroCTA/>
            </div>
        )
    }


    function HeroCTA(){
        
        const BarDesigns = () => {

            return(
                <div className="design-bar hero-design-bar"></div>
            )
        }


        return(
            <>
            <div className="cta-content-wrap">
                <div className="call-to-action">
                    <h2>Make your occasion <i>extra</i> special</h2>
                    <p>Discover our irresistible brownies, cookies, and a delightful array of treats, all made with love and the finest ingredients. Whether you're celebrating a special occasion or simply craving a sweet escape, we've got the perfect goodies to satisfy your every desire. </p>
                </div>
            </div>

            <BarDesigns/>

            </>
        )
    }


    return(
        <section className="main-section layout-section">
            <HeroContentWrap/>
        </section>
    )
}

//TODO
//create the content for hero gallery
//Make hero gallery responsive and aligned
