import Aside from '../Aside/aside'
import styles from './styles.module.scss'

export default function Main(){
  return(
    <div className={styles.Container}>
    
    <main className={styles.mainContainer}>
    <section className={styles.mainContent}>
      <h2>Teste</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At
        repudiandae obcaecati culpa quis odio deleniti quas? Quae, itaque
        consequuntur nulla voluptatum, vitae assumenda optio quos temporibus,
        omnis cumque nihil tempora?
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos fugit
        aspernatur quisquam optio hic illum voluptates necessitatibus quam,
        vitae explicabo quibusdam officiis perferendis vel eveniet. Porro
        voluptatibus rerum mollitia dignissimos?
      </p>
      <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos fugit
      aspernatur quisquam optio hic illum voluptates necessitatibus quam,
      vitae explicabo quibusdam officiis perferendis vel eveniet. Porro
      voluptatibus rerum mollitia dignissimos?
    </p>
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos fugit
    aspernatur quisquam optio hic illum voluptates necessitatibus quam,
    vitae explicabo quibusdam officiis perferendis vel eveniet. Porro
    voluptatibus rerum mollitia dignissimos?
  </p>
    </section>
  </main>
  <Aside/>
  
    </div>
  )
}