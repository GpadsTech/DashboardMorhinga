import Gauge  from './Gauge.jsx'
import styles from './Dashboard.module.css'

function Dashboard()
{
    return(
        <div className={styles.dashboard}>
        <h2 className={styles.titulo}>Estação de Parnamirim</h2>
        <div className={styles.grid}>
            <div className={styles.card}>
            <Gauge titulo="Temperatura" valor={26} min={0} max={50}/>
            </div>
            <div className={styles.card}>
            <Gauge titulo="Umidade" valor={40} min={0} max={100}/>
            </div>
            <div className={styles.card}>
            <Gauge titulo="ph" valor={7} min={0} max={14}/>
            </div>
        </div>
        </div>
    )
}

export default Dashboard