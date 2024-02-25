import Accordion from "../components/Accordion"

function AccordionPage() {
   const items = [
      {
         id: 'asdasd',
         label: 'Can I use React on a project?',
         content: 'Yes you can React on any project you want. Yes you can React on any project you want. Yes you can React on any project you want.'
      },
      {
         id: 'xvdsvge',
         label: 'Can I use React on a project?',
         content: 'Yes you can React on any project you want. Yes you can React on any project you want. Yes you can React on any project you want.'
      },
      {
         id: 'sgsedq',
         label: 'Can I use React on a project?',
         content: 'Yes you can React on any project you want. Yes you can React on any project you want. Yes you can React on any project you want.'
      }
   ]
   return <Accordion items={items} />
}


export default AccordionPage