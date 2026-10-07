import styles from './CardDestino.module.css'


type Props = {
    destino: {
        id: number,
        nome: string,
        imagem: string,
        descricao: string
    };

}

const CardDestino = ({destino} : Props) => {
    return(
        <div className={styles.card}>
            <h2 className= {styles.card__title}>{destino.nome}</h2>
            <img className={styles.card__img} src={destino.imagem} alt={destino.nome}/>
            <p className={styles.card__descricao}>{destino.descricao}</p>
        </div>

    )
}

export default CardDestino;