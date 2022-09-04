import styles from "./SecondSection.module.scss"
import Lottie from "lottie-react";

import lottie2 from "../../public/assets/lottie/2.json"
import lottie3 from "../../public/assets/lottie/3.json"
import lottie4 from "../../public/assets/lottie/4.json"

const SecondSection = () => {

  const textContent = [
    {
      title: "O que são criptomoedas?",
      body: "As Criptomoedas são moedas virtuais que utilizam a tecnologia Blockchain, uma tecnologia baseada em criptografia, para as operações realizadas com esta moeda.",
      lottie: lottie3,
    },
    {
      title: "Para que servem?",
      body: "As suas aplicações são como método de pagamento e, principalmente, como uma forma de investimento, pois se valorizam ou desvalorizam de acordo com a compra, venda e inserção de novas moedas na rede.",
      lottie: lottie2,
    },
    {
      title: "Por que falar sobre esse tema?",
      body: "Apesar de serem relativamente novas, a primeira criptomoeda foi criada em 2008, estas moedas virtuais se tornaram um destaque na mídia mundial, pelo grande potencial de crescimento, principalmente em 2017 quando houve uma supervalorização.",
      lottie: lottie4,
    },
  ]

  return (
    <>
      <section className={styles.container}>
        <ul className={styles.topicsList}>
          {
            textContent.map(item => (
              <li className={styles.topic} key={item.title}>
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div className={styles.lottie}>
                  <Lottie animationData={item.lottie} loop={true} />
                </div>
              </li>
            ))
          }
        </ul>
        <div className={styles.cta}>
          <p>Ficou interessado e gostaria de aprender mais?</p>
          <button onClick={() => window.scrollTo(0,0)}>Inscreva-se no webinário</button>
        </div>
      </section>
    </>
  )
}

export default SecondSection;