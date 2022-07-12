import { h } from 'preact';
import { Link } from 'preact-router/match';
import style from './header.css';
import logo from "../../assets/images/glamping-on-wine.svg";
import InstagramIcon from "../../assets/images/instagram-icon.svg";

const Header = () => (

	<header class={style.header}>
		<nav>
			<Link href="/"><img src={logo} /></Link>
			<subnav class={style.subnav}>
				<Link activeClassName={style.active} href="/the-story/">The Story</Link>
				<Link activeClassName={style.active} href="/contact">Contact</Link>
				<a href="https://www.instagram.com/glampingonwine/" target="_blank" rel="noreferrer"><img src={InstagramIcon} alt="Glamping on Wine on Instagram" /> Instagram</a>
			</subnav>
		</nav>
	</header>
);

export default Header;
