import styles from "./locationcard.css";

export default function LocationCard(props) {


  let links = Object.entries(props.links[0])

  // for (const [site, link] of Object.entries(links)) {
  //   console.log(site, link)
  // }

  links = links.map(link => {

    for (let value in link) {
      if (link[1] !== "") {
        return <li><a class={`button button_${link[0]}`} href={link[1]} /></li>
      }
    }
  })

  return (
    <div class={styles.card}>
      <h2 class={styles.card_title}>{props.name}</h2>
      <p class={styles.card_model}>{props.type}</p>
      <p class={styles.card_meta}>{props.city}, {props.state} · Up to {props.guests} guests · {props.beds} bed{props.beds > 1 && 's'} · {props.baths} bath{props.baths > 1 && 's'}</p>
      <img src={props.image} />
      <ul class={styles.linksList}>
        {links}
      </ul>
    </div>
  )
}