import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Capitalismo() {
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
          {props.left && <ArrowLeftIcon className="w-12 h-12 text-red_light" />}
          {!props.left && (
            <ArrowRightIcon className="w-12 h-12 text-red_light" />
          )}
        </div>
      </>
    );
  }

  return (
    <div className="w-full">
      <div className="flex w-full min-h-screen">
        <div className="w-2/3">
          <section className="text-center p-4 w-4/5 mx-auto my-32">
            <p className="text-sm text-red_light font-medium">01.</p>
            <h2 className="mb-4">O que é o Capitalismo?</h2>
            <div className="w-4/5 m-auto">
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quasi veritatis quis! Ab debitis iste consectetur corrupti
                nulla, unde fugiat accusantium impedit earum voluptas eos
                suscipit atque, fuga ducimus hic. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Minima quasi veritatis quis! Ab
                debitis iste consectetur corrupti nulla, unde fugiat accusantium
                impedit earum voluptas eos suscipit atque, fuga ducimus hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quasi veritatis quis! Ab debitis iste consectetur corrupti
                nulla, unde fugiat accusantium impedit earum voluptas eos
                suscipit atque, fuga ducimus hic. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Minima quasi veritatis quis! Ab
                debitis iste consectetur corrupti nulla, unde fugiat accusantium
                impedit earum voluptas eos suscipit atque, fuga ducimus hic.
              </p>
            </div>
          </section>

          <section className="text-center p-4 w-4/5 m-auto my-40">
            <div className="w-2/5 text-center flex flex-col m-auto mb-8">
              <p className="text-sm text-red_light font-medium">02.</p>
              <div className="bg-black">
                <p className="py-4 px-16 text-gray100 text-lg font-bold">
                  PRINCIPAIS
                </p>
              </div>
              <div className="border border-black">
                <p className="py-4 px-16 text-lg font-bold">TEMAS</p>
              </div>
            </div>
            <div className="w-4/5 m-auto">
              <p className="p-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quasi veritatis quis! Ab debitis iste consectetur corrupti
                nulla, unde fugiat accusantium impedit earum voluptas eos
                suscipit atque, fuga ducimus hic. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Minima quasi veritatis quis! Ab
                debitis iste consectetur corrupti nulla, unde fugiat accusantium
                impedit earum voluptas eos suscipit atque, fuga ducimus hic.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                quasi veritatis quis! Ab debitis iste consectetur corrupti
                nulla, unde fugiat accusantium impedit earum voluptas eos
                suscipit atque, fuga ducimus hic. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Minima quasi veritatis quis! Ab
                debitis iste consectetur corrupti nulla, unde fugiat accusantium
                impedit earum voluptas eos suscipit atque, fuga ducimus hic.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit, laboriosam! Vel temporibus architecto laborum
                illum voluptates repudiandae expedita, nihil maiores quam omnis
                dolorem blanditiis quidem totam sed minus ut fugiat?
              </p>
            </div>
          </section>
        </div>

        <section className="flex w-1/3 ">
          <div className=" w-full">
            <h1 className="rotate-90 transform origin-left translate-x-1/2 my-16 text-plus text-red font-bold">
              CAPITALISMO
            </h1>
          </div>
        </section>
      </div>

      <section className="w-full my-16 p-4">
        <p className="text-sm text-red_light font-medium text-center">03.</p>
        <h4 className="mb-4 text-x2 font-medium text-center">
          PINCIPAIS LÍDERES
        </h4>
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
            className="keen-slider flex overflow-x-hidden w-full h-[400px]"
          >
            <div className="keen-slider__slide bg-black">1</div>
            <div className="keen-slider__slide bg-black">2</div>
            <div className="keen-slider__slide bg-black">3</div>
            <div className="keen-slider__slide bg-black">4</div>
            <div className="keen-slider__slide bg-black">5</div>
            <div className="keen-slider__slide bg-black">5</div>
            <div className="keen-slider__slide bg-black">5</div>
            <div className="keen-slider__slide bg-black">5</div>
            <div className="keen-slider__slide bg-black">5</div>
            <div className="keen-slider__slide bg-black">5</div>
            <div className="keen-slider__slide bg-black">5</div>
          </div>
        </div>
      </section>
    </div>
  );
}
