import styles from "./FirstSection.module.scss"
import Lottie from "lottie-react";
import lottie1 from "../../public/assets/lottie/1.json"

const FirstSection = () => {
  return (
    <>
      <div className={styles.container}>
        <header className={styles.cabecalho}>
          <img className={styles.logo} src="/assets/img/logo.svg" alt="Logo Economiau" />
          <div className={styles.social}>
            <a href="https://whatsa.me/5598982333797" target="_blank" title="Whatsapp" rel="noreferrer">
              <img src="/assets/img/icon-wpp.svg" alt="WhatsApp" />
            </a>
            <a href="https://www.linkedin.com/in/gabrielcbarros/" target="_blank" title="Linkedin" rel="noreferrer">
              <img src="/assets/img/icon-in.svg" alt="Linkedin" />
            </a>
            <a href="https://github.com/gc-barros" target="_blank" title="GitHub" rel="noreferrer">
              <img src="/assets/img/icon-git.svg" alt="GitHub" />
            </a>
          </div>
        </header>

        <main className={styles.principal}>
          <div className={styles.lottie}>
            <Lottie animationData={lottie1} loop={true} />
          </div>
          <section className={styles.intro}>
            <span>Webinário gratuito</span>
            <h1>Criptomoedas e impactos na economia</h1>

            <div className={styles.palestrante}>
              <img src="/assets/img/monica.png" alt="Mônica Duarte" />
              <div className={styles.info}>
                <p>Mônica Duarte</p>
                <p>Doutora em economia (UFMA)</p>
              </div>
            </div>

            <h2>05/09 às 12h</h2>

            <form onSubmit={e => e.preventDefault()}>
              <input type="text" placeholder="Nome completo" />
              <input type="email" placeholder="E-mail" />
              <button>Quero participar</button>
            </form>
          </section>
        </main>
      </div>
    </>
  )
}

export default FirstSection;