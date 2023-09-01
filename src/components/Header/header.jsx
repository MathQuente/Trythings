import { Link } from 'react-router-dom'

import styles from './header.module.scss'

export default function Header(){
  return(
    <>
    <header className={styles.headerContainer}>
      <Link to="/">
      try<span>things</span>
      </Link>
      <nav className={styles.headerContent}>
        <ul className={styles.navMenu}>
          <li>
            <Link to="galeria">
            Imagens
            </Link> 
          </li>
          <li>
            <Link to="form">
              Formulario
            </Link>
          </li>
          <li>
          <Link to="/video">
            Video
            </Link>
          </li>
          <li>
          <Link to="/map">
            Mapa
          </Link>
          </li>
          <ul className={styles.nav}>
            <li>
              <a href="">Mais coisas</a>
          <ul className={styles.navSubMenu}>
            <li>
               <a href="">Dados form</a>
            </li>
             <li>
               <a href="">Em processo</a>
            </li>
            <li>
            <a href="">Em processo</a>
           </li>
         </ul>
         </li>
          <Link to="/">

          </Link>
        </ul>

        </ul>
      </nav>
    </header>
    </>
  )
}