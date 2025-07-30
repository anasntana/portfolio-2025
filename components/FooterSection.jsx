import NavLink from '../components/NavLink';

const mesLiens = [
  { title: 'Behance', lien: 'https://behance.net/anasntana' },
  { title: 'LinkedIn', lien: 'https://linkedin.com/in/anasntana/' },
];

const FooterSection = () => {
  return (
    <div className="">
      <nav className="px-4 md:px-20 py-4 md:py-6 text-lg md:text-xl fixed bottom-0 mt-auto w-full bg-off-white border-t flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
        <ul className="flex space-x-4 md:space-x-8">
          {mesLiens.map((link, index) => (
            <li key={index} className="bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900 bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
              <NavLink href={link.lien} title={link.title} />
            </li>
          ))}
        </ul>
        <div className="text-center md:text-left">
          <p className="text-xs md:text-sm">Designed by Ana Santana in 2023 ♥ All rights reserved</p>
        </div>
      </nav>
    </div>
  );
};

export default FooterSection;
