import Gauge  from './Gauge.jsx'
import styles from './Dashboard.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import {db} from '../firebase.js'
import {collection, onSnapshot } from 'firebase/firestore'
import { Link } from 'react-router-dom'

function Dashboard()
{
      const [sensor_dados, setSensor_Dados] = useState(null)
      const [ph_dados, setPh_Dados] = useState(null)
      useEffect(() => {
        //lista todos os documentos com o .docs, e pega o ultimo doc c/ lenght -1
    const unsubscribeSensor = onSnapshot(collection(db, 'sensor_dados'), (snapshot) => {
        const ultimo = snapshot.docs[snapshot.docs.length - 1]
        console.log('Dados do sensor:', ultimo.data())
        setSensor_Dados(ultimo.data())
    })

    const unsubscribePh = onSnapshot(collection(db, 'ph_dados'), (snapshot) => {
        const ultimo = snapshot.docs[snapshot.docs.length - 1]
        console.log('Dados do sensor:', ultimo.data())
        setPh_Dados(ultimo.data())
    })

    return () => {
        unsubscribeSensor()
        unsubscribePh()
    }
    }, [])


    return(
        <div className={styles.dashboard}>
        <h2 className={styles.titulo}>Estação de Parnamirim</h2>
        <Link to="/historico">Histórico</Link>
        <div className={styles.grid}>
            <div className={styles.card}>
            <Gauge titulo="Temperatura" valor={sensor_dados ? (sensor_dados.Temperatura ?? sensor_dados['Temperatura(ºC)'] ?? 0) : 0} min={0} max={50} cor="#FF6B35" unidade="°C"/>
            </div>
            <div className={styles.card}>
            <Gauge titulo="Umidade" valor={sensor_dados ? (sensor_dados.Umidade ?? sensor_dados['Umidade(%)'] ?? 0) : 0} min={0} max={100} cor="#4A90D9" unidade="%" />
            </div>
            <div className={styles.card}>
            <Gauge titulo="ph" valor={ph_dados ? (ph_dados.Umidade ?? ph_dados['Umidade(%)'] ?? 0) : 0} min={0} max={14} cor="#7ecec4" unidade="pH"/>
            </div>
        </div>

        </div>
    )
}

export default Dashboard