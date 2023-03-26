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
      <div className="w-2/5 rounded-md bg-chumbo flex flex-col items-center mx-auto py-8">
        <h1 className="text-white text-2xl mb-8">This is the Contact page</h1>
        <Form
          onSubmit={handleSubmit}
          replace={false}
          id="contact-form"
          className="w-3/5 grid items-center mx-auto"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            className="rounded-md p-2.5 outline-none my-1.5"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            className="rounded-md p-2.5 outline-none my-1.5"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="rounded-md p-2.5 outline-none my-1.5"
          />

          <textarea
            name="message"
            id="message"
            placeholder="Message"
            rows={5}
            className="rounded-md p-2.5  outline-none resize-none my-1.5"
          />
        </Form>
      </div>
      <Outlet />
    </div>
  );
}
