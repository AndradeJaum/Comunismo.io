import { Outlet } from "@remix-run/react";

export default function home() {
  return (
    <main className="bg-background w-full">
      <section className="flex justify-between py-32 w-full ">
        <div className="w-1/4">image</div>
        <div className="w-3/4 flex flex-col justify-around items-center relative overflow-x-hidden">
          <h1 className="absolute -top-[6%] left-[10%] text-extra opacity-5 text-gray100 font-bold ">
            COMUNISMO
          </h1>
          <div className="text-center text-gray100 py-16 relative">
            <p className="text-sm text-red font-medium">01.</p>
            <div className="w-full flex ">
              <div className="w-full m-auto"></div>
              <h2 className="p-4 whitespace-nowrap text-x2">
                O que é o Comunismo?
              </h2>
              <div className="w-full h-[2px] bg-red m-auto"></div>
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
          <div className="text-red">seta</div>
        </div>
      </section>
      <section className="flex justify-between py-32 w-full ">
        <div className="w-3/4 flex flex-col justify-around items-center relative overflow-x-hidden">
          <h1 className="absolute -top-[6%] left-[25%] text-extra opacity-5 text-gray100 font-bold ">
            SOCIALISMO
          </h1>
          <div className="text-center text-gray100 py-16 relative">
            <p className="text-sm text-red font-medium">02.</p>
            <div className="w-full flex ">
              <div className="w-full h-[2px] bg-red m-auto"></div>

              <h2 className="p-4 whitespace-nowrap text-x2">
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
          <div className="text-red">seta</div>
        </div>
        <div className="w-1/4 ">image</div>
      </section>
      <section className="flex justify-between py-32 w-full ">
        <div className="w-1/4">image</div>
        <div className="w-3/4 flex flex-col justify-around items-center relative overflow-x-hidden">
          <h1 className="absolute -top-[6%] left-[10%] text-extra opacity-5 text-gray100 font-bold ">
            CAPITALISMO
          </h1>
          <div className="text-center text-gray100 py-16 relative">
            <p className="text-sm text-red font-medium">03.</p>
            <div className="w-full flex ">
              <div className="w-full m-auto"></div>
              <h2 className="p-4 whitespace-nowrap text-x2">
                O que é o Capitalismo?
              </h2>
              <div className="w-full h-[2px] bg-red m-auto"></div>
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
          <div className="text-red">seta</div>
        </div>
      </section>
    </main>
  );
}
