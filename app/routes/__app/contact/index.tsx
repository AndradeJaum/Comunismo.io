import { json } from "@remix-run/node";
import { Form, Outlet } from "@remix-run/react";
import type { SyntheticEvent } from "react";

import * as gtag from "~/utils/gtags.client";

export const action = async () => json({});

export default function Index() {
  const handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    const target = e.target as typeof e.target & {
      message: { value: string };
    };

    console.log(`event.target.message value is: '${target.message.value}'`);
    console.log(`event object is:`, e);

    gtag.event({
      action: "submit_form",
      category: "Contact",
      label: target.message.value,
    });
  };

  return (
    <div className=" h-full ">
      <div className="w-2/5 bg-chumbo flex flex-col items-center mx-auto py-8 shadow-2xl shadow-chumbo">
        <h1 className="text-white text-3xl tracking-widest mb-8 font-extrabold">
          CONTACT PAGE
        </h1>
        <Form
          onSubmit={handleSubmit}
          replace={false}
          id="contact-form"
          className="w-3/5 grid items-center mx-auto text-gray100"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            autoComplete="off"
            className="bg-chumbo py-2.5 outline-none my-1.5 border-b border-gray300 hover:border-yellow_dark focus:border-yellow_dark"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            autoComplete="off"
            className="bg-chumbo py-2.5 outline-none my-1.5 border-b border-gray300 hover:border-yellow_dark focus:border-yellow_dark"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="off"
            className="bg-chumbo py-2.5 outline-none my-1.5 border-b border-gray300 hover:border-yellow_dark focus:border-yellow_dark"
          />

          <textarea
            name="message"
            id="message"
            placeholder="Message"
            autoComplete="off"
            rows={1}
            className="bg-chumbo py-2.5 outline-none my-1.5 border-b border-gray300 resize-none	hover:border-yellow_dark focus:border-yellow_dark"
          />

          <button className="bg-chumbo py-2.5  my-8 hover:text-yellow_dark border border-t-0 border-l-0 border-gray300 	hover:border-yellow_dark font-semibold tracking-wide">
            SEND
          </button>
        </Form>
      </div>
      <Outlet />
    </div>
  );
}
