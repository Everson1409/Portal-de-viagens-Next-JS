
import styles from './page.module.css'
import Link from "next/link";

export default function Home() {
  return (
 
    
    <div className={styles.home}>
     
     <div className={styles.conteudo}>
      <p className={styles.intro}>
        Apresento o meu <strong>Portal de Viagens</strong>, um espaço criado
    para você descobrir destinos, conhecer lugares incríveis e encontrar
    inspiração para sua próxima aventura.
      </p>

      <ul className={styles.lista}>
        <li>🌴 Descubra destinos</li>
        <li>🗺️ Explore novos lugares</li>
        <li>📸 Encontre inspiração</li>
        <li>✈️ Planeje sua próxima viagem</li>
      </ul>

      <p className={styles.final}>
        <strong>
           Seu próximo destino pode estar a apenas um clique de distância. 🌎✨
        </strong>
      </p>

      <Link href="/destinos" className={styles.botao}>
    Ver destinos
      </Link>
      </div>

   <div className={styles.logo}>
    <img src="/logo.jpeg" alt="Logo Portal de Viagens" />
    </div>

    </div>

    

 
  
  );
}
