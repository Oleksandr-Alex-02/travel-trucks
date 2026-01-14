
import Link from 'next/link';
import css from './Header.module.css'

const Header = () => {

    return (
        <section>
            <header className={css.header}>
                <Link href='/'>
                    <svg width="136" height="20">
                        <use href="/sprite.svg#logo" />
                    </svg></Link>

                <nav>
                    <ul className={css.navigation}>
                        <li><Link href='/'>Home</Link></li>
                        <li><Link href='/catalog'>Catalog</Link></li>
                    </ul>
                </nav>
            </header>
        </section>
    )
}

export default Header;