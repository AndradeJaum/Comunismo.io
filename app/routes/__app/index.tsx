import { Link, Outlet } from "@remix-run/react";

export default function home() {
  return (
    <main className="w-full">
      <section className="flex justify-around py-32">
        <div className="w-2/5 flex relative">
          <div className="w-96 h-96 border border-red_light m-auto rotate-45 absolute top-[15%] left-[40%]"></div>
        </div>
        <div className="w-3/5 flex flex-col items-center overflow-x-hidden text-center py-16">
          <p className="text-sm text-red_light font-medium">01.</p>
          <div className="w-full flex relative">
            <h1 className="absolute bottom-1 text-extra opacity-30 text-black font-bold ">
              COMUNISMO
            </h1>
            <div className="w-full m-auto"></div>
            <h2 className="p-2 whitespace-nowrap text-x2">
              O QUE É O COMUNISMO?
            </h2>
            <div className="w-full h-[2px] bg-red_light m-auto"></div>
          </div>

          <div className="w-4/5 m-auto">
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
          <div className="text-red_light">
            <Link to="communism">Ler mais!</Link>
          </div>
        </div>
      </section>

      <section className="flex justify-around py-32">
        <div className="w-3/5 flex flex-col items-center overflow-x-hidden text-center py-16">
          <p className="text-sm text-red_light font-medium">01.</p>
          <div className="w-full flex relative">
            <h1 className="absolute bottom-1 right-0 text-extra opacity-30 text-black font-bold ">
              SOCIALISMO
            </h1>
            <div className="w-full m-auto"></div>
            <h2 className="p-2 whitespace-nowrap text-x2">
              O QUE É O SOCIALISMO?
            </h2>
            <div className="w-full h-[2px] bg-red_light m-auto"></div>
          </div>

          <div className="w-4/5 m-auto">
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
          <div className="text-red_light">
            <Link to="communism">Ler mais!</Link>
          </div>
        </div>
        <div className="w-2/5 flex relative">
          <div className="w-96 h-96 border border-red_light m-auto rotate-45 absolute top-[15%] right-[40%]"></div>
        </div>
      </section>

      <section className="flex justify-around py-32">
        <div className="w-2/5 flex relative">
          <div className="w-96 h-96 border border-red_light m-auto rotate-45 absolute top-[15%] left-[40%]"></div>
        </div>
        <div className="w-3/5 flex flex-col items-center overflow-x-hidden text-center py-16">
          <p className="text-sm text-red_light font-medium">01.</p>
          <div className="w-full flex relative">
            <h1 className="absolute bottom-1 text-extra opacity-30 text-black font-bold ">
              CAPITALISMO
            </h1>
            <div className="w-full m-auto"></div>
            <h2 className="p-2 whitespace-nowrap text-x2">
              O QUE É O CAPITALISMO?
            </h2>
            <div className="w-full h-[2px] bg-red_light m-auto"></div>
          </div>

          <div className="w-4/5 m-auto">
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
          <div className="text-red_light">
            <Link to="communism">Ler mais!</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
