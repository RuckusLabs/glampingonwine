import { h } from 'preact';
import style from './contact.css';
import ReactContactForm from 'react-mail-form'

const Contact = () => (
  <div class={style.container}>
    <h1>Contact</h1>
    <div class={style.content_container}>
      <ReactContactForm
        className={style.form}
        to="contact@glampingonwine.com"
        titlePlaceholder="Subject"
        contentsPlaceholder="Message"
        buttonText="Send Email"
      />
    </div>
  </div>
);

export default Contact;
