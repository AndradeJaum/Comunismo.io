import { useTranslation } from "react-i18next";

export default function Comunismo() {
  let { t } = useTranslation();

  return (
    <main className="bg-background text-gray100">
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

      <div className="">
        Carrosel
        <div>Loren oren Loren</div>
      </div>
    </main>
  );
}
