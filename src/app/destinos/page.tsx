import { Dados } from "../../dados/destinos";
import CardDestino from "@/components/CardDestino/CardDestino";
import styles from './page.module.css'


const DestinosPage = () => {
    return(
        
        <div> 
          <h1 className={styles.title}>Destinos</h1>
          
          <div className={styles.grid}> 
        {Dados.map((destino) => {
        return(
            <CardDestino 
            key={destino.id}
            destino={destino}/>
            
        ); 
       
        })}
        </div> 
            
      </div>
     
    );
};

export default DestinosPage;
