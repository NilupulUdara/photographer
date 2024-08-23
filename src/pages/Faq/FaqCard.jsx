import { Faq } from "./Faq";
import React from "react";

export const FaqCard = () => {

  const faqs = [
    {
      "id": 1,
      "question": "Your Question Title?",
      "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, cumque"
    },
    {
      "id": 2,
      "question": "Do eiusmod tempor incidit?",
      "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, cumque"
    },
    {
      "id": 3,
      "question": "Consectetur adipisicing elit, sed do eiusmod tempor incididunt?",
      "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, cumque"
    },
    {
      "id": 4,
      "question": "Cupidatat iusmod tempor incid idun?",
      "answer": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos, cumque"
    }
  ];

  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm text-amber">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Do you have any Questions?</h1>
      <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
        {faqs.map((faq) => (
          <Faq key={faq.id} faq={faq} />
        ))}
      </div>
    </section>
  )
}
