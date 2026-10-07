import Link from "next/link";
import styles from"./Layout.module.css"

type Props = {
    children : React.ReactNode;
};

const Layout = ({children} : Props) => {
    return(
        <>
        <header className={styles.header}>

         <h1 className={styles.title}>Portal de Viagens</h1>

            <h2 className={styles.h2}>✈️ Explore novos destinos e viva novas experiências! 🌎</h2>

         <nav className={styles.nav}>
        <Link href="/">Inicio</Link>
        <Link href="/destinos">Destinos</Link>
        
    
      </nav>

        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
           <h2 className={styles.footer__h2}>Portal de Viagens</h2>

           <p className={styles.footer__p}>Criado por <strong>Everson do Nascimento Moura</strong></p>

          <div className={styles.contatos}>
           <a
          href="https://www.instagram.com/everson_moura08/"
          target="_blank"
          rel="noopener noreferrer"
          >
            📸 Instagram
            </a> 
                                           
           <a href="https://www.linkedin.com/in/everson-nascimento-a756a23ab"
              target="_blank"
              rel="noopener noreferrer"
           >🔗 LinkedIn</a>
      
           </div>

        <p className={styles.footer__p}> © 2026 Portal de Viagens                   
      Todos os direitos reservados.</p>

        </footer>

        

        
        </>

    );
}

export default Layout;