import styles from './styles.module.scss'


export default function Footer(){
  return(
    <>
      <footer className={styles.footerContainer}>
        <p>Feito com 💗</p>
           <ul id={styles.socialLinks} >
              <li className={styles.link}>
                <a
                  href="
                   https://youtube.com/channel/UCn7qn2k0o0zmid0QvqSw93Q"
                    target="_blank"
                      ><img src="/assets/imagens/youtube.svg" alt="" />
                  </a>
              </li>
              <li>
                 <a
                  href="
                    https://facebook.com/Mathdesousa"
                      target="_blank"
                        ><img src="/assets/imagens/facebook.svg" alt=""
                  /></a>
              </li>
              <li >
                  <a
                    href="
                      https://instagram.com/math_quente"
                        target="_blank"
                          ><img src="/assets/imagens/instagram.svg" alt=""
                    /></a>
                </li>
              <li>
                 <a
                      href="
                        https://twitter.com/MathQuente"
                target="_blank"
               ><img src="/assets/imagens/twitter.svg" alt=""
              /></a>
            </li>
          </ul>
     </footer>
    </>
  )
}