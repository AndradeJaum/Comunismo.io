import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Comunismo() {
  let { t } = useTranslation();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: "free-snap",
    slides: {
      origin: "auto",
      perView: 4,
      spacing: 20,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  function Arrow(props: {
    disabled: any;
    onClick: React.MouseEventHandler<SVGSVGElement> | undefined;
    left: any;
  }) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <>
        <div
          onClick={props.onClick}
          className={`arrow w-10 h-10 fill-red ${
            props.left ? <ArrowLeftIcon /> : <ArrowRightIcon />
          } ${disabeld}`}
        >
          {props.left && <ArrowLeftIcon />}
          {!props.left && <ArrowRightIcon />}
        </div>
      </>
    );
  }

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
          <div className="relative w-1/5 h-auto">
            {loaded && instanceRef.current && (
              <>
                <Arrow
                  left
                  onClick={(e: { stopPropagation: () => any }) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
                />
                <Arrow
                  onClick={(e: { stopPropagation: () => any }) =>
                    e.stopPropagation() || instanceRef.current?.next()
                  }
                  disabled={
                    currentSlide ===
                    instanceRef.current.track.details.slides.length - 1
                  }
                  left={undefined}
                />
              </>
            )}
          </div>

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
            <div className="keen-slider__slide bg-gray100">5</div>
            <div className="keen-slider__slide bg-gray100">5</div>
            <div className="keen-slider__slide bg-gray100">5</div>
          </div>
        </div>
      </div>
    </main>
  );
}
