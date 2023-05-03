import { useTranslation } from "react-i18next";

export default function BrazilianParties() {
  let { t } = useTranslation();

  return (
    <div className="bg-background text-gray100 w-full">
      <section className="mx-auto w-1/2 text-center p-8 pt-32">
        <p className="text-sm text-red_light font-medium text-center">01.</p>
        <h1 className="text-x2 mb-4">Temos algum Partido?</h1>
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

      <div className="flex my-32 justify-evenly">
        <div className="w-32 h-32 m-auto -translate-y-1/2 rotate-45 bg-gray100"></div>
        <div className="mx-auto w-2/5 h-[1px] bg-gray100"></div>
        <div className="w-32 h-32 m-auto -translate-y-1/2 rotate-45 bg-gray100"></div>
      </div>

      <section className="w-4/5 my-16 text-center m-auto flex">
        <div className="w-2/3 flex">
          <div className="w-2/5 bg-gray300"></div>
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
      <section className="w-4/5 my-16 text-center m-auto flex justify-end">
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
          <div className="w-2/5 bg-gray300"></div>
        </div>
      </section>
    </div>
  );
}
