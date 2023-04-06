import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Capitalismo() {
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
    onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
    left: any;
  }) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <>
        <div
          onClick={props.onClick}
          className={`arrow flex justify-center ${
            props.left ? <ArrowLeftIcon /> : <ArrowRightIcon />
          } ${disabeld}`}
        >
          {props.left && <ArrowLeftIcon className="w-12 h-12 text-red" />}
          {!props.left && <ArrowRightIcon className="w-12 h-12 text-red" />}
        </div>
      </>
    );
  }

  return (
    <main className="bg-background text-gray100 w-full">
      <div className="flex w-full min-h-screen">
        <div className="w-2/3">
          <div className="text-center p-4 w-4/5 mx-auto my-32">
            <h2 className="p-4">O que é o Capitalismo?</h2>
            <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae laborum doloremque voluptate aperiam commodi quam incidunt quod porro, odit animi nam maxime vero quae voluptatum atque! Assumenda necessitatibus itaque sapiente.
            </p>
          </div>

          <div className="text-center p-4 w-4/5 mx-auto my-32">
            <div className="bg-gray100 w-1/2">
              <p className="p-4 text-background text-lg font-bold">
                CONCEITOS DO
              </p>
            </div>
            <div className="border border-gray100 w-1/2">
              <p className="p-4 text-lg font-bold">CAPITALISMO</p>
            </div>
          </div>

          <div className="text-center p-4 w-4/5 mx-auto my-16">
            <h3 className="p-4">O que é o Capitalismo?</h3>
            <p className="p-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae laborum doloremque voluptate aperiam commodi quam incidunt quod porro, odit animi nam maxime vero quae voluptatum atque! Assumenda necessitatibus itaque sapiente.
            </p>
          </div>
        </div>

        <div className="flex w-1/3 ">
          <div className=" w-full">
            <h1 className="rotate-90 origin-left translate-x-1/2 my-16 text-plus text-red font-bold">
              CAPITALISMO
            </h1>
          </div>
        </div>
      </div>

      <div className="w-full my-16 p-4">
        <h4 className="p-4 text-x2 font-medium text-center">PINCIPAIS LÍDERES</h4>
        <div className="flex">
          <div className="relative w-1/5 h-auto">
            {loaded && instanceRef.current && (
              <div className="h-full flex flex-col justify-center">
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
              </div>
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
