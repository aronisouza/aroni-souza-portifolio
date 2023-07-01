import { Header } from './components/header/header'
import { Educacao } from './components/educacao/educacao'
import { Experiencia } from './components/experiencia/experiencia'

import './styles/home.scss'
import { Botoes } from './components/botoes/botoes'

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experiencia />
      <Educacao />
      <Botoes />
    </main>
  )
}
