import styles from './App.module.css'
import Header  from './components/Header.jsx'
import Mapa  from './components/Mapa.jsx'
import Dashboard  from './components/Dashboard.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';
import Historico from './components/Historico.jsx'
function App() {
  const [estacaoSelecionada, setestacaoSelecionada] = useState(null)
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <div>
            <div className={styles.container}>
              <div className={styles.mapa}>
                <Mapa onEstacaoClick={setestacaoSelecionada}/>
              </div>
              {estacaoSelecionada && (
                <div className={styles.dashboard}>
                <Dashboard onFechar={() => setestacaoSelecionada(null)} />
                </div>
              )}
            </div>
          </div>
        }/>
        <Route path="/historico" element={<Historico />}/>
      </Routes>
    </BrowserRouter>
  )
}


export default App
