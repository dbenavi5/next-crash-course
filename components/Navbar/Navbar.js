import styles from './Navbar.module.css';
import Link from 'next/Link'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
