import Image from "next/image"
import "./experiencia.scss"

export function Experiencia() {
return(
    <div className="experiencia">
        <h2>🛠 Experiência</h2>
        <div>
          <h3>Trabalhos realizado, site responsivo</h3> 
            <Image
            src="/trabalho-01.png"
            alt="Next.js Logo"
            width={200}
            height={200}
            
            />
            <Image
            src="/trabalho-02.png"
            alt="Next.js Logo"
            width={200}
            height={200}
            
            />
            <Image
            src="/trabalho-03.png"
            alt="Next.js Logo"
            width={200}
            height={200}
            
            />
            <Image
            src="/trabalho-04.png"
            alt="Next.js Logo"
            width={150}
            height={200}
            
            />
        </div>
    </div>
)
}