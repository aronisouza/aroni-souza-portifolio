import Image from "next/image"
import "./header.scss"
export function Header() {
  return(
    <div className="header">
      <div className="headerinfo">

        <div>
          <h1>Desenvolvedor</h1>
          <h3>C#, PHP, NodeJs Reactjs</h3>
          <h2>Olá 👋 sou Aroni Souza</h2>
        </div>
        
        <div className="divIcons">
          <Image
            src="/www.png"
            alt="www"
            width={30}
            height={30}
            />
          <Image
            src="/github.png"
            alt="www"
            width={30}
            height={30}
          />
          <Image
            src="/linkedin.png"
            alt="www"
            width={30}
            height={30}
          />
        </div>
      
      </div>
        <p>
          TENHO 41 ANOS SOU DESENVOLVEDOR BACKEND E FRONTEND COM 2 ANOS DE EXPERIENCIA TRABALHANDO COMO FREELANCER
        </p>
    </div>
  )
}