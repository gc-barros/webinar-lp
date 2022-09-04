import styles from "./ThirdSection.module.scss"
import Lottie from "lottie-react";
import lottie5 from "../../public/assets/lottie/5.json"
import { useState } from "react";

const SecondSection = () => {
  
  const faqContent = [
    {
      title: "O que é um webinário?",
      body: "O Webinário, também conhecido como Webinar, é uma videoconferência utilizada para fins comerciais ou educacionais, transmitida online com hora marcada, ao vivo ou gravada, que tem como objetivo educar um público-alvo sobre um tema.",
    },
    {
      title: "Preciso pagar para participar?",
      body: "Não, você não paga nada! Basta se inscrever no formulário e você receberá um convite contendo o link da videoconferência.",
    },
    {
      title: "Posso compartilhar o link com amigos?",
      body: "Sim, mas é importante que todos os participantes do webinário estejam inscritos no nosso sistema, através do formulário presente neste site.",
    },
    {
      title: "É necessário uma inscrição para cada webinário?",
      body: "Não. Uma vez que você tenha cadastrado seu nome completo e e-mail, te avisaremos sempre que surgir um novo webinário do seu interesse.",
    },
    {
      title: "Como faço para sugerir temas?",
      body: "Você pode enviar sugestões de temas para webinários futuros através das nossas redes sociais ou pelo e-mail economiau@atendimento.com.",
    },
    {
      title: "As videoconferências ficarão gravadas?",
      body: "Sim, todos os nossos webinários são gravados e compartilhados no nosso canal do YouTube.",
    },
  ];

  const [faqSelected, setFaqSelected] = useState([]);
  const toggle = (i) => {
    if (faqSelected.includes(i)) {
      setFaqSelected(prev => prev.filter(item => item !== i))
      return
    }
    setFaqSelected(prev => [...prev, i])
  }

  return (
    <>
      <section className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.about}>
            <h3>Perguntas frequentes</h3>
            <p>A seguir, encontram-se respondidas algumas das dúvidas mais frequentes acerca dos nossos webinários.</p>
            <div className={styles.lottie}>
              <Lottie animationData={lottie5} loop={true} />
            </div>
          </div>
  
          <ul className={styles.faq}>
            {
              faqContent.map((item, i) => (
                <li className={`${styles.faqItem} ${faqSelected.includes(i) ? styles.active : ""}`} key={item.title} onClick={() => toggle(i)}>
                  <h4>{item.title}</h4>
                  <p>{item.body}</p>
                </li>
              ))
            }
          </ul>
        </div>
        <div className={styles.cta}>
          <p>Ainda restou alguma dúvida?</p>
          <button onClick={() => window.open('https://www.barrosdev.com.br/', '_blank')}>Fale conosco</button>
        </div>
      </section>
      <footer className={styles.footer}>
        Developed with 🧡 by <a href="https://www.barrosdev.com.br/" target="_blank" rel="noreferrer">Gabriel Barros</a>
      </footer>
    </>
  )
}

export default SecondSection;