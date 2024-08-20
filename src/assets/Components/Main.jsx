
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
            <div className="call-to-action">
                <h2>Make your occasion <i>extra</i> special</h2>
                <p>Discover our irresistible brownies, cookies, and a delightful array of treats, all made with love and the finest ingredients. Whether you're celebrating a special occasion or simply craving a sweet escape, we've got the perfect goodies to satisfy your every desire. </p>
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
// - Add a Parent to the 3 items inside the main-section
// - Make hero responsive
// - Wrap HeroCTA and BarDesign in container
