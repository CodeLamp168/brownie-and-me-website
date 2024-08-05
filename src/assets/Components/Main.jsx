
export default function Main(){


    function HeroCTA(){
        return(
            <div className="call-to-action">
                <h2>Make your occasion <i>extra</i> special</h2>
                <p>Discover our irresistible brownies, cookies, and a delightful array of treats, all made with love and the finest ingredients. Whether you're celebrating a special occasion or simply craving a sweet escape, we've got the perfect goodies to satisfy your every desire. </p>
            </div>
        )
    }

    function HeroImg(){
        return(
            <div className="hero-img-wrap">
                <img src="#" alt="404" className="hero-img" />
            </div>
        )
    }

    function BarDesigns(){

        return(
            <div className="design-bar hero-design-bar"></div>
        )
    }
    return(
        <section className="main-section layout-section">
            <HeroCTA/>
            <BarDesigns/>
        </section>
    )
}