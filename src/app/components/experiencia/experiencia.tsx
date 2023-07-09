import Image from "next/image"
import "./experiencia.scss"

export function Experiencia() {
return(
    <div className="experiencia">
        <h2>🛠 Experiência | Trabalhos</h2>
        <div>
          <h3>Trabalho realizado, site responsivo</h3> 
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

        <p>
            Desenvolvimento de aplicações web e desktop utilizando PHP, C#, .NET Core e .NET Framework<br />
            Manutenção de código e correção de bugs.<br />
            Integração de sistemas com banco de dados.<br />
            Teste de funcionalidades e correção de bugs.<br />
            Desenvolvimento de frontend utilizando HTML5, jQuery, CSS3 e Bootstrap.<br />
            Desenvolvimento nocode com bubble e kodular.
        </p>

        <p>
            <strong>Habilidades Técnicas:</strong><br />
            Resolução de problemas<br />
            Adaptabilidade e aprendizado contínuo<br />
            Trabalho em equipe<br />
            Pensamento crítico e criativo<br />
            Boas práticas de programação<br />
            Conhecimento em linguagens de programação, como Java, C#, PHP<br />
            Desenvolvimento de software orientado a objetos<br />
            Conhecimento de metodologias ágeis<br />
            Capacidade de gerenciar projetos e cumprir prazos<br />
            Familiaridade com controle de versão, como Git/Github<br />
            Conhecimento de bancos de dados e linguagem SQL<br />
            Capacidade de otimizar o desempenho de aplicações e identificar bugs
        </p>

        <p>
            <strong>Habilidades Comportamentais:</strong><br />
            Trabalho em equipe colaborativo<br />
            Pensamento crítico e resolução de problemas<br />
            Adaptabilidade a mudanças<br />
            Capacidade de aprendizado contínuo<br />
            Organização e gerenciamento do tempo<br />
            Flexibilidade e agilidade<br />
            Iniciativa e proatividade<br />
            Capacidade de trabalhar de forma autônoma<br />
            Empatia e inteligência emocional<br />
            Resiliência diante de desafios<br />
            Pensamento estratégico<br />
            Espírito de colaboração e compartilhamento de conhecimento
        </p>
        
    </div>
)
}