export default function About(){

    function AboutInfo() {
        return(
            <div className="text-area">
            <h3>Lorem ipsum dolor sit.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, quo?</p>
        </div>
        )
    }

    function AboutDisplay(){
        return(
            <div className="about-product-display">

            <img src="#" alt="product-display-1"/>
            <img src="#" alt="product-display-2" />
            <img src="#" alt="product-display-3" />
            <img src="#" alt="product-display-4" />
            <img src="#" alt="product-display-5" />
            <img src="#" alt="product-display-6" />
            
        </div>
        )
    }

    return(
        <div className="about-section">
            <AboutInfo />
            <AboutDisplay />
        </div>
    )
}