import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

const products = [
  {
    name: "Cras sed",
    description: "Feugiat nibh sed pulvinar proin",
    price: "$ 12.99",
    cal: "185kcal",
  },
  {
    name: "Consequat",
    description: "Nibh tellus molestie nunc non",
    price: "$ 8.95",
    cal: "185kcal",
  },
  {
    name: "Sollicitudin",
    description: "Id porta nibh venenatis cras sed",
    price: "$ 5.49",
    cal: "185kcal",
  },
];

export default function Comunismo() {
  let { t } = useTranslation();

  const [sliderRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "auto",
      perView: 4,
      spacing: 20,
    },
  });

  const [swiper, setSwiper] = useState< any| null>(null);

  const nextSlideHandler = () => {
    swiper?.slideNext();
  };

  const prevSlideHandler = () => {
    swiper.slidePrev();
  };

  return (
    <main className="bg-background text-gray100 w-full">
      <div className="flex w-full min-h-screen">
        <div className="w-2/3">
          <div className="text-center p-4 w-4/5 mx-auto my-32">
            <h2 className="p-4">O que é o Comunismo?</h2>
            <p className="p-4">
              O comunismo é uma teoria política e econômica que busca
              estabelecer uma sociedade igualitária, na qual os meios de
              produção são de propriedade coletiva e os bens são distribuídos de
              forma equitativa entre todos os membros. O comunismo defende a
              abolição da propriedade privada e do sistema de classes sociais, e
              propõe a criação de um Estado que garanta a justiça social e o
              bem-estar de todos os cidadãos. Para os comunistas, o capitalismo
              é um sistema injusto e opressivo, que explora os trabalhadores em
              benefício dos proprietários dos meios de produção. O comunismo tem
              suas raízes no pensamento de filósofos como Karl Marx e Friedrich
              Engels, e foi implementado em alguns países, como a União
              Soviética e a China, embora sua aplicação tenha gerado
              controvérsias e críticas. Mesmo assim, o comunismo continua sendo
              uma corrente política importante em todo o mundo, sendo objeto de
              estudos e debates por parte de especialistas e interessados no
              assunto.
            </p>
          </div>

          <div className="text-center p-4 w-4/5 mx-auto my-32">
            <div className="bg-gray100 w-1/2">
              <p className="p-4 text-background text-lg font-bold">
                CONCEITOS DO
              </p>
            </div>
            <div className="border border-gray100 w-1/2">
              <p className="p-4 text-lg font-bold">COMUNISMO</p>
            </div>
          </div>

          <div className="text-center p-4 w-4/5 mx-auto my-16">
            <h3 className="p-4">O que é o Comunismo?</h3>
            <p className="p-4">
              O comunismo é uma teoria política e econômica que busca
              estabelecer uma sociedade igualitária, na qual os meios de
              produção são de propriedade coletiva e os bens são distribuídos de
              forma equitativa entre todos os membros. O comunismo defende a
              abolição da propriedade privada e do sistema de classes sociais, e
              propõe a criação de um Estado que garanta a justiça social e o
              bem-estar de todos os cidadãos. Para os comunistas, o capitalismo
              é um sistema injusto e opressivo, que explora os trabalhadores em
              benefício dos proprietários dos meios de produção. O comunismo tem
              suas raízes no pensamento de filósofos como Karl Marx e Friedrich
              Engels, e foi implementado em alguns países, como a União
              Soviética e a China, embora sua aplicação tenha gerado
              controvérsias e críticas. Mesmo assim, o comunismo continua sendo
              uma corrente política importante em todo o mundo, sendo objeto de
              estudos e debates por parte de especialistas e interessados no
              assunto.
            </p>
          </div>
        </div>

        <div className="flex w-1/3 ">
          <div className=" w-full">
            <h1 className="rotate-90 origin-left translate-x-1/2 my-16 text-plus text-red font-bold">
              COMUNISMO
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full my-16 p-4">
        <h4 className="p-4 text-x2 font-medium">PINCIPAIS LÍDERES</h4>
        <div className="flex">
          <div className="w-1/4"></div>
          <div
            ref={sliderRef}
            className="keen-slider flex overflow-x-hidden w-full p-4 h-[400px]"
          >
            <div className="keen-slider__slide bg-gray100 ml-24">1</div>
            <div className="keen-slider__slide bg-gray100">2</div>
            <div className="keen-slider__slide bg-gray100">3</div>
            <div className="keen-slider__slide bg-gray100">4</div>
            <div className="keen-slider__slide bg-gray100">5</div>
            <div className="keen-slider__slide bg-gray100">5</div>
            <div className="keen-slider__slide bg-gray100">5</div>
            <div className="keen-slider__slide bg-gray100">5</div>
          </div>
        </div>

        <div className="slider-container">
          <Swiper
            spaceBetween={50}
            slidesPerView={4}
            scrollbar={{ draggable: true }}
            className="slider"
            grabCursor={true}
            touchEventsTarget="container"
            onSwiper={(s: any) => {
              setSwiper(s);
            }}
            breakpoints={{
              200: {
                slidesPerView: 2,
                spaceBetween: 5,
              },
              450: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              910: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
          >
            {products.map((prod) => (
              <SwiperSlide key={prod.name} className="slide-item">
                <a href="/">
                  <img src={prod.name} alt={prod.name} />
                  <span className="cal">{prod.cal}</span>
                  <h3>{prod.name}</h3>
                  <p className="paragraph">{prod.description}</p>
                  <span className="price">{prod.price}</span>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <button
            onClick={prevSlideHandler}
            className="arrow arrow-left"
            title="slide anterior"
          >
            SETA AQUI
          </button>
          <button
            onClick={nextSlideHandler}
            className="arrow arrow-right"
            title="slide posterior"
          >
            SETA AQUI
          </button>
        </div>
      </div>
    </main>
  );
}
