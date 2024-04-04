export type IFaq =  {
  id: string;
  title: string;
  desc: string;
  isShow?: boolean;
}

const faq_data: IFaq[] = [
  {
    id: "One",
    title: "What services does EWBS Excellence Business Services offer?",
    desc: "EWBS offers a wide range of services including business setup in Freezone and Mainland, accounting and bookkeeping, IT and digital marketing services, real estate services, VAT registration and filing, auditing, license renewal, PRO services, company liquidation services, document attestation, and more.",
    isShow: true,
  },
  {
    id: "Two",
    title: "How can EWBS assist in business setup in Dubai?",
    desc: "EWBS provides personalized consultation and end-to-end support for business setup in both Freezone and Mainland areas of Dubai. They handle the entire process from company registration to obtaining necessary licenses and permits, ensuring a smooth and efficient setup experience.",
  },
  {
    id: "Three",
    title: "What expertise does the team at EWBS possess?",
    desc: "The team at EWBS consists of industry professionals with years of experience and expertise across various domains including legal frameworks, accounting, IT, digital marketing, real estate, and more. They are dedicated to delivering exceptional services and achieving outstanding results for their clients.",
  },
  {
    id: "Four",
    title: "How can I renew my business license with EWBS?",
    desc: "EWBS assists clients in the timely and hassle-free renewal of their business licenses, allowing them to focus on their core operations without disruptions. They handle all the necessary paperwork and ensure compliance with all requirements.",
  },
  {
    id: "Five",
    title: "Can EWBS help with VAT registration and filing?",
    desc: "Yes, EWBS has a team of VAT experts who assist businesses in navigating the complex landscape of Value Added Tax. They provide end-to-end solutions including VAT registration, compliance, reporting, and filing, enabling clients to fulfill their tax obligations seamlessly.",
  },
];

export default faq_data;