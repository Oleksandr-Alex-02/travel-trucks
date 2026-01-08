
import Link from "next/link";

const HomePage = () => {

    return (
        <section>
            <div>
                <div>
                    <h1>Campers of your dreams</h1>
                    <p>You can find everything you want in our catalog</p>
                </div>
                <Link href='/catalog'><button type="button">View Now</button></Link>
            </div>
        </section>
    )
}

export default HomePage;