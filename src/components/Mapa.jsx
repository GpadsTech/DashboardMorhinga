import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'

delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
})

function Mapa({onEstacaoClick}){
    console.log('Mapa renderizando')
    return(
        
        <MapContainer center = {[-8.0896, -39.5775]} zoom={13} style={{ height: '100vh', width: '100%'}}>
            <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
            <Marker 
                position={[-8.0896, -39.5775]}
                eventHandlers={{
                    
                    click: () => {
                        console.log('Marcador clicado!')
                        onEstacaoClick("Parnamirim")}
                    
                }}
            >
                <Popup>Estação de Parnamirim</Popup>
            </Marker>
        </MapContainer> 
    )
}

export default Mapa