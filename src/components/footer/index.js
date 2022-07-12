import { h } from 'preact';
import style from './footer.css';
import scene from "../../assets/images/glamping-scene.svg";

const Footer = () => (
  <footer class={style.footer}>
    <hr />
    <p>Enjoy the stars and sleep tight.</p>
    <a href="/"><img src={scene} /></a>
    <p>© 2011 – {new Date().getFullYear()} Glamping on Wine</p>
  </footer>
);

export default Footer;
