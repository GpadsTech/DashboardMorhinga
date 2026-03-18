import styles from './App.module.css'
import Header  from './components/Header.jsx'
import Mapa  from './components/Mapa.jsx'
import Dashboard  from './components/Dashboard.jsx'
import { useState } from 'react';
function App() {
  const [estacaoSelecionada, setestacaoSelecionada] = useState(null)
  return (
    <div>
      <Header/>
      <div className={styles.container}>
        <div className={styles.mapa}>
          <Mapa onEstacaoClick={setestacaoSelecionada}/>
        </div>
        {estacaoSelecionada && (
          <div className={styles.dashboard}>
            <Dashboard />
          </div>
        )}
      </div>
    </div>


  )
}


export default App
