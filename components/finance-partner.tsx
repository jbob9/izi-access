const partners = [
  { name: "Groupe 3737", logo: '/group-37-37.jpeg', href: "https://groupe3737.com/" },
  { name: "Gouvernement Canadien", logo: '/group-37-37.jpeg', href: "https://www.canada.ca" },
  { name: "Initiative Appuyer les Communautés Noires du Canada (IACNC)", logo: '/iacnc-logo-n@2x.png', href: "https://iacnc.ca" },
];

const FinancePartner = () => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="w-2/3 mx-auto text-center mb-6">
        <h2 className="text-4xl font-bold tracking-tight  sm:text-6xl">Nos Partenaires Financiers</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          IZI ACCESS est fière de compter sur le soutien de partenaires engagés qui partagent notre vision et notre mission.
          </p>
      </div>
      <div className="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
        {partners.map((partner, i) => (
          <a href={partner.href} key={i} target="_blank">
          <img src="/group-37-37.jpeg" className="py-3 lg:py-5 h-auto w-24 mx-auto sm:mx-0 text-gray-500" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default FinancePartner;
