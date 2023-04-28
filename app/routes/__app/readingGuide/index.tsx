import { useTranslation } from "react-i18next";

export default function ReadingGuide() {
  let { t } = useTranslation();

  return (
    <main className="bg-background h-screen text-gray100 ">
      <div className="mx-auto  w-1/2 text-center p-8 pt-32">
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
      </div>
    </main>
  );
}
