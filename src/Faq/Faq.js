import React from 'react'
import Accordions from './Accordions';

const Faq = () => {


    const accordionItems = [
        {
          title: 'What are the main features?',
          content: 'This is the First items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.',
        },
        {
          title: 'do i have to pay again after trial',
          content: 'This is the Second items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.',
        },
        {
          title: 'How can I get started after trial?',
          content: 'This is the Third items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.',
        },

        {
            title: 'Can I be refunded if am not satisfied?',
            content: 'This is the Fourth items accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. Its also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow.',
          },

      ];

  return (
    <>
      <div className="container mx-auto p-4" id='Faq'>
      <h1 className="text-3xl font-bold mb-4"></h1>
      <Accordions items={accordionItems} />
    </div>

    </>
  )
}

export default Faq
