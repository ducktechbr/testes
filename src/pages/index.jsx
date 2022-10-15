import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";

import Marquee from "react-fast-marquee";

import duckLogo from "../../public/duckLogo.png";
import spread from "../../public/spread.svg";
import spread2 from "../../public/spread2.svg";
import tokenization from "../../public/tokenization.svg";
import investPlatform from "../../public/investPlatform.svg";
import financialSistems from "../../public/financialSistems.svg";
import Marca from "../../public/Marca.svg";

import Accordion from "../components/Acordion";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <nav className={styles.menu}>
          <Image alt="logo" src={duckLogo} width={100} height={100} />
          <div className={styles.options}>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Projetos</a>
              </li>
              <li>
                <a href="">Serviços</a>
              </li>
            </ul>
          </div>
        </nav>

        <section className={styles.slogan}>
          <h1>Bem-vindo à Ducktech</h1>
          <h2>Nossa vanguarda é o desenvolvimento do Futuro!</h2>
        </section>
      </div>

      {/* <main className={styles.teste}> */}
      <section className={styles.services}>
        <div className={styles.titleCenter}>
          <Image alt="spreads" src={spread} />
          <span className={styles.titleRose}>NOSSOS SERVIÇOS PARA VOCÊ</span>
          <Image alt="spreads" src={spread2} />
        </div>
        <Swiper
          className={styles.swiper}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          // pagination={pagination}
          modules={[Pagination, EffectCoverflow, Navigation, Autoplay]}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.servicesSquares}>
              <Image alt="" src={tokenization} />
              <span>Tokenização</span>
              <p>
                criação de plataforma e token para captação de ativos para
                desenvolvimento do seu projeto
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.servicesSquares}>
              <Image alt="" src={investPlatform} />
              <span>Sistemas Financeiros</span>
              <p>
                desenvolvemos plataformas focadas em gestão, split de pagamento,
                controle de investidores e investimento, etc
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.servicesSquares}>
              <Image alt="" src={financialSistems} />
              <span>Plataforma de investimento</span>
              <p>
                criamos plataformas especializadas na captação de investimentos
                todas seguindo normativas da CVM
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.servicesSquares}>
              <Image alt="" src={financialSistems} />
              <span>Sistemas Financeiros</span>
              <p>
                desenvolvemos plataformas focadas em gestão, split de pagamento,
                controle de investidores e investimento, etc
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.servicesSquares}>
              <Image alt="" src={investPlatform} />
              <span>Plataforma de investimento</span>
              <p>
                criamos plataformas especializadas na captação de investimentos
                todas seguindo normativas da CVM
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className={styles.projects}>
        <div className={styles.client}>
          <Image alt="" src={spread} />
          <span className={styles.title}>NOSSOS CLIENTES</span>
          <Image alt="" src={spread2} />
        </div>
        <Marquee gradient={false} speed={150} className={styles.ourClents}>
          <Image alt="" src={Marca} />
        </Marquee>
      </section>
      <section className={styles.duck}>
        <div>
          <Image alt="" src={spread} />
          <span className={styles.titleRose}>O QUE É A DUCKTECH?</span>
          <Image alt="" src={spread2} />
        </div>
        <div>
          <p>
            A ducktech é uma softhouse dedicada ao desenvolvimento de fintechs,
            sistemas financeiros, tecnologias blockchain, serviços de
            tokenização e consultorias.
          </p>
        </div>
      </section>
      <section className={styles.faq}>
        <div>
          <Image alt="" src={spread} />
          <span className={styles.titleRose}>PERGUNTAS FREQUENTES</span>
          <Image alt="" src={spread2} />
        </div>
        <div className={styles.accordion}>
          <Accordion />
        </div>
      </section>
      <section className={styles.contact}>
        <div>
          <Image alt="" src={spread} />
          <span className={styles.title}>REDES SOCIAIS</span>
          <Image alt="" src={spread2} />
        </div>
        <div className={styles.social}>
          <div className={styles.squareLinked}></div>
          <div className={styles.squareInsta}></div>
        </div>
        <div style={{ marginTop: "8rem" }}>
          <Image alt="" src={spread} />
          <span className={styles.titleRose}>ENTRE EM CONTATO</span>
          <Image alt="" src={spread2} />
        </div>
        <form action="" className={styles.form}>
          <label>NOME DO SEU PROJETO</label>
          <input className={styles.input} type="text" placeholder="Nome" />
          <label>EMAIL</label>
          <input
            className={styles.input}
            type="email"
            placeholder="Seu melhor email"
          />
          <label>RESUMO DO PROJETO</label>
          <textarea placeholder="Descrição" />
          <div className={styles.buttonArea}>
            <input className={styles.button} type="submit" value="Enviar" />
          </div>
        </form>
      </section>
      {/* </main> */}
      <footer className={styles.footer}>
        <div>
          <Image alt="" src={duckLogo} />
        </div>
        <p>Copyright © 2022. All Rights Reserved by DUCKTECH</p>
      </footer>
    </div>
  );
}
