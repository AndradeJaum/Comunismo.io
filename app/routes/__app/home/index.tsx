import { Outlet } from "@remix-run/react";

export default function Home() {
  return (
    <main className="bg-background w-full">
      <section className="bg-red_light relative">
        <h1 className="absolut text-extra opacity-20 text-red font-bold">
          COMUNISMO
        </h1>
        <div className="flex justify-around py-32 w-full ">
          <div className="w-1/4 bg-gray300">image</div>
          <div className="w-1/2 flex flex-col justify-around items-center">
            <div className="text-center p-4 w-4/5  ">
              <p className="text-sm text-red font-medium">01.</p>
              <h2 className="p-4">O que é o Comunismo?</h2>
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
            <div>seta</div>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
}
