//criar efeito meia-lua
import { RadialBarChart, RadialBar, PolarAngleAxis } from 'recharts'

function Gauge({ titulo, valor, min, max})
{
    //sempre preenche metade do arco
    const percentual = (valor - min) / (max - min) * 100
    console.log('Gauge aplicado')
    return(
        <div>
            <p>{titulo}</p>
            <RadialBarChart
            //tamanho do grafico
            width={200}
            height={120}
            //centro do arco
            cx={100}
            cy={100}
            //espessura do arco
            innerRadius={70}
            outerRadius={100}
            //onde o arco começa e termina
            startAngle={180}
            endAngle={0}
            //valor que o arco vai preencher.Nesse caso, metade dele
            data={[{ value: percentual}]}
            >
            
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false}/>
            <RadialBar  dataKey="value" fill='#7ecec4'/>    
            </RadialBarChart>
            <p>{valor}</p>
        </div>

        
    )
}

export default Gauge