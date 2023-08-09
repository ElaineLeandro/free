import { ThemeProvider } from '@emotion/react'
import {Card} from './componentes/Card'
import { Estilos } from "./componentes/EstilosGlobais/Estilos"

function App() {


  return (
   <ThemeProvider>
      <Estilos/>
      <Card>
      <h1>Thiagas</h1>

      </Card>

   </ThemeProvider>
  )
}

export default App
