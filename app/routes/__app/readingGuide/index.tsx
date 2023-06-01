import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";

export default function ReadingGuide() {
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
    <main className="">
      <section className="mx-auto w-1/2 text-center p-8 pt-32">
        <p className="text-sm text-red_light font-medium text-center">01.</p>
        <h1 className="text-x2 mb-4">Como começar a estudar?</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
          aliquid quod ad eveniet rem ipsum id doloribus unde quisquam nesciunt?
          Harum temporibus nam ratione nostrum doloremque, a autem mollitia
          quaerat. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Totam, nihil dolor. Consequatur vitae sunt laborum, laboriosam ad
          adipisci. Quibusdam ipsum libero dolores debitis quo expedita modi
          nesciunt, ad nobis consectetur.
        </p>
      </section>

      <section className="w-full my-16 p-4">
        <p className="text-sm text-red_light font-medium text-center">02.</p>
        <h4 className="mb-4 text-x2 font-medium text-center">LEITURA</h4>
        <div className="flex">
          <div className="relative w-[10%] h-auto">
            {loaded && instanceRef.current && (
              <div className="h-full flex flex-col justify-center">
                <Arrow
                  left
                  onClick={(e: { stopPropagation: () => any }) =>
                    e.stopPropagation() || instanceRef.current?.prev()
                  }
                  disabled={currentSlide === 0}
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
          </div>

          <div className="relative w-[10%] h-auto">
            {loaded && instanceRef.current && (
              <div className="h-full flex flex-col justify-center">
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
        </div>
      </section>

      <section className="p-4 my-16 mb-16 w-4/5 m-auto flex justify-center">
        <div className="text-center">
          <p className="text-sm text-red_light font-medium text-left">02.</p>
          <div className="bg-black">
            <p className="py-4 px-16 text-gray100 text-lg font-bold">
              PRINCIPAIS
            </p>
          </div>
          <div className="border border-black">
            <p className="py-4 px-16 text-lg font-bold">TEMAS</p>
          </div>
        </div>
      </section>

      <section className="w-4/5 my-32 text-center m-auto flex">
        <div className="w-2/3 flex">
          <div className="w-2/5 bg-black"></div>
          <div className="w-3/5 ">
            <h1 className="text-x2 mb-4">Partido Teste</h1>
            <p className="p-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              aliquid quod ad eveniet rem ipsum id doloribus unde quisquam
              nesciunt? Harum temporibus nam ratione nostrum doloremque, a autem
              mollitia quaerat. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Totam, nihil dolor. Consequatur vitae sunt
              laborum, laboriosam ad adipisci. Quibusdam ipsum libero dolores
              debitis quo expedita modi nesciunt, ad nobis consectetur.
            </p>
          </div>
        </div>
      </section>
      <section className="w-4/5 my-32 text-center m-auto flex justify-end">
        <div className="w-2/3 flex">
          <div className="w-3/5 ">
            <h1 className="text-x2 mb-4">Partido Teste</h1>
            <p className="p-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
              aliquid quod ad eveniet rem ipsum id doloribus unde quisquam
              nesciunt? Harum temporibus nam ratione nostrum doloremque, a autem
              mollitia quaerat. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Totam, nihil dolor. Consequatur vitae sunt
              laborum, laboriosam ad adipisci. Quibusdam ipsum libero dolores
              debitis quo expedita modi nesciunt, ad nobis consectetur.
            </p>
          </div>
          <div className="w-2/5 bg-black"></div>
        </div>
      </section>
    </main>
  );
}
