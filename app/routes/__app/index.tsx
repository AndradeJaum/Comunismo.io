import { Link, Outlet } from "@remix-run/react";

export default function home() {
  return (
    <main className="bg-background w-full">
      <section className="flex justify-around py-32">
        <div className="w-2/5 flex justify-center relative">
          <div className="w-96 h-96 border border-red_light m-auto rotate-45 absolute top-[15%] left-[40%]"></div>
        </div>
        <div className="w-3/5 flex flex-col justify-around items-center relative overflow-x-hidden">
          <h1 className="absolute -top-[6%] left-[10%] text-extra opacity-5 text-gray100 font-bold ">
            COMUNISMO
          </h1>
          <div className="text-center text-gray100 py-16 relative">
            <p className="text-sm text-red_light font-medium">01.</p>
            <div className="w-full flex ">
              <div className="w-full m-auto"></div>
              <h2 className="mb-4 whitespace-nowrap text-x2">
                O que é o Comunismo?
              </h2>
              <div className="w-full h-[2px] bg-red_light m-auto"></div>
            </div>
            <div className="w-4/5 m-auto">
              <p className="p-4">
                O comunismo é uma teoria política e econômica que busca
                estabelecer uma sociedade igualitária, na qual os meios de
                produção são de propriedade coletiva e os bens são distribuídos
                de forma equitativa entre todos os membros. O comunismo defende
                a abolição da propriedade privada e do sistema de classes
                sociais, e propõe a criação de um Estado que garanta a justiça
                social e o bem-estar de todos os cidadãos. Para os comunistas, o
                capitalismo é um sistema injusto e opressivo, que explora os
                trabalhadores em benefício dos proprietários dos meios de
                produção. O comunismo tem suas raízes no pensamento de filósofos
                como Karl Marx e Friedrich Engels, e foi implementado em alguns
                países, como a União Soviética e a China, embora sua aplicação
                tenha gerado controvérsias e críticas. Mesmo assim, o comunismo
                continua sendo uma corrente política importante em todo o mundo,
                sendo objeto de estudos e debates por parte de especialistas e
                interessados no assunto.
              </p>
            </div>
          </div>
          <div className="text-red_light">
            <Link to="communism">Ler mais!</Link>
          </div>
        </div>
      </section>
      <section className="flex justify-between py-32 w-full ">
        <div className="w-3/4 flex flex-col justify-around items-center relative overflow-x-hidden">
          <h1 className="absolute -top-[6%]  text-extra opacity-5 text-gray100 font-bold ">
            SOCIALISMO
          </h1>
          <div className="text-center text-gray100 py-16 relative">
            <p className="text-sm text-red_light font-medium">02.</p>
            <div className="w-full flex ">
              <div className="w-full h-[2px] bg-red_light m-auto"></div>

              <h2 className="mb-4 whitespace-nowrap text-x2">
                O que é o Socialismo?
              </h2>
              <div className="w-full m-auto"></div>
            </div>
            <div className="w-2/3 m-auto">
              <p className="p-4">
                O comunismo é uma teoria política e econômica que busca
                estabelecer uma sociedade igualitária, na qual os meios de
                produção são de propriedade coletiva e os bens são distribuídos
                de forma equitativa entre todos os membros. O comunismo defende
                a abolição da propriedade privada e do sistema de classes
                sociais, e propõe a criação de um Estado que garanta a justiça
                social e o bem-estar de todos os cidadãos. Para os comunistas, o
                capitalismo é um sistema injusto e opressivo, que explora os
                trabalhadores em benefício dos proprietários dos meios de
                produção. O comunismo tem suas raízes no pensamento de filósofos
                como Karl Marx e Friedrich Engels, e foi implementado em alguns
                países, como a União Soviética e a China, embora sua aplicação
                tenha gerado controvérsias e críticas. Mesmo assim, o comunismo
                continua sendo uma corrente política importante em todo o mundo,
                sendo objeto de estudos e debates por parte de especialistas e
                interessados no assunto.
              </p>
            </div>
          </div>
          <div className="text-red_light">
            <Link to="socialism">Ler mais!</Link>
          </div>
        </div>
        <div className="w-2/5 flex justify-center relative">
          <div className="w-96 h-96 border border-red_light m-auto rotate-45 absolute top-[15%] right-[40%]"></div>
        </div>
      </section>
      <section className="flex justify-around py-32">
        <div className="w-2/5 flex justify-center relative">
          <div className="w-96 h-96 border border-red_light m-auto rotate-45 absolute top-[15%] left-[40%]"></div>
        </div>
        <div className="w-3/5 flex flex-col justify-around items-center relative overflow-x-hidden">
          <h1 className="absolute -top-[6%] left-[10%] text-extra opacity-5 text-gray100 font-bold ">
            COMUNISMO
          </h1>
          <div className="text-center text-gray100 py-16 relative">
            <p className="text-sm text-red_light font-medium">01.</p>
            <div className="w-full flex ">
              <div className="w-full m-auto"></div>
              <h2 className="mb-4 whitespace-nowrap text-x2">
                O que é o Capitalismo?
              </h2>
              <div className="w-full h-[2px] bg-red_light m-auto"></div>
            </div>
            <div className="w-4/5 m-auto">
              <p className="p-4">
                O comunismo é uma teoria política e econômica que busca
                estabelecer uma sociedade igualitária, na qual os meios de
                produção são de propriedade coletiva e os bens são distribuídos
                de forma equitativa entre todos os membros. O comunismo defende
                a abolição da propriedade privada e do sistema de classes
                sociais, e propõe a criação de um Estado que garanta a justiça
                social e o bem-estar de todos os cidadãos. Para os comunistas, o
                capitalismo é um sistema injusto e opressivo, que explora os
                trabalhadores em benefício dos proprietários dos meios de
                produção. O comunismo tem suas raízes no pensamento de filósofos
                como Karl Marx e Friedrich Engels, e foi implementado em alguns
                países, como a União Soviética e a China, embora sua aplicação
                tenha gerado controvérsias e críticas. Mesmo assim, o comunismo
                continua sendo uma corrente política importante em todo o mundo,
                sendo objeto de estudos e debates por parte de especialistas e
                interessados no assunto.
              </p>
            </div>
          </div>
          <div className="text-red_light">
            <Link to="capitalism">Ler mais!</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
