import styles from './styles.module.scss'

export default function Map(){
  return(
    <div className={styles.map}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1991.1708548588254!2d-38.902200276553195!3d-3.5081753669654483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c0db16cc425c0b%3A0x6b81f860216d6744!2sTaiba%2C%20S%C3%A3o%20Gon%C3%A7alo%20do%20Amarante%20-%20CE%2C%2062670-000!5e0!3m2!1spt-BR!2sbr!4v1688582477069!5m2!1spt-BR!2sbr"
    width="400" height="320" 

    allowfullscreen="" 
    loading="lazy" 
    aria-hidden="false"
    referrerpolicy="no-referrer-when-downgrade">
    </iframe>
    </div>

  )
}