
import Link from "next/link";
import css from "./Home.module.css"

const HomePage = () => {

    return (
        <section className={css.hero}>
            <div className={css.blokTitle}>
                <div>
                    <h1 className={css.title}>Campers of your dreams</h1>
                    <p className={css.text}>You can find everything you want in our catalog</p>
                </div>
                <Link href='/catalog'><button className={css.buttonHero} type="button">View Now</button></Link>
            </div>
        </section>
    )
}

export default HomePage;