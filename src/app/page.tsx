import { Header } from './components/header/header'
import { Educacao } from './components/educacao/educacao'
import { Experiencia } from './components/experiencia/experiencia'

import './styles/home.scss'

export default function Home() {
  return (
    <main className="container">
      <Header />
      <Experiencia />
      <Educacao />
    </main>
  )
}
