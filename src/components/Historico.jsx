import { useState } from "react"
import { db } from '../firebase.js'
import styles from './Historico.module.css'
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Link } from 'react-router-dom'

function Historico()
{
    const [dataInicio, setDatainicio] = useState('')
    const [dataFinal, setDataFinal] = useState('')
    const [dados, setDados] = useState([])
    const [dadosPh, setDadosPh] = useState([])
    const pesquisar = async () => {
    const snapshot = await getDocs(collection(db, 'sensor_dados'))
    const resultados = snapshot.docs
        .map(doc => doc.data())
        .filter(doc => doc.Hora && doc.Hora >= dataInicio && doc.Hora <= dataFinal + ' 23:59:59')
    setDados(resultados)

    const snapshotPh = await getDocs(collection(db, 'ph_dados'))
    const resultadosPh = snapshotPh.docs
        .map(doc => doc.data())
        .filter(doc => doc.Hora && doc.Hora >= dataInicio && doc.Hora <= dataFinal + ' 23:59:59')
    setDadosPh(resultadosPh)
    }

    return(
        <div className={styles.header}>
            <Link to="/" className={styles.voltar}>← Voltar ao mapa</Link>
            <h2 className={styles.titulo}>Histórico</h2>
            <div className={styles.filtros}>
                <label className={styles.label}> Data de início</label>
                <input  className={styles.input} type="date" value={dataInicio} onChange={(e) => setDatainicio(e.target.value)} />
                <label className={styles.label}> Data final </label>
                <input className={styles.input} type="date" value={dataFinal} onChange={(e) => setDataFinal(e.target.value)} />
                <button className={styles.botao} onClick={pesquisar}>Pesquisar</button>
            </div>
            {dados.length > 0 && (
            <div>
                <h3>Temperatura</h3>
                <LineChart width={800} height={300} data={dados}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Hora" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Temperatura" stroke="#7ecec4" />
                </LineChart>

                <h3>Umidade</h3>
                <LineChart width={800} height={300} data={dados}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Hora" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Umidade" stroke="#7ecec4" />
                </LineChart>
            </div>
            )}

            {dadosPh.length > 0 && (
            <div>
                <h3>pH</h3>
                <LineChart width={800} height={300} data={dadosPh}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="Hora" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="ph" stroke="#7ecec4" />
                </LineChart>
            </div>
            )}

        </div>

    )
}
export default Historico