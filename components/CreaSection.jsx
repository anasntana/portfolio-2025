import NavLink from './NavLink';

const mesLiens = [
  { title: 'HOME', lien: '/' },
  { title: 'PROJECTS', lien: '/projects' },
  { title: 'RESUME', lien: '/resume' },
  { title: 'ABOUT', lien: '/about' },
];


const CreaSection = () => {
  return null;
  return (
<div className="text-xl w-full border-b border-slate-300">


      {/* USE CASE 1 */}
  <div className="flex mx-20 border-b py-40">
    <div className="w-1/2 pr-20">
      <div className="flex">
        <img className="w-14 h-14 animate-spin mr-10" src="./rose-500.svg" alt="rose icon"></img>
        <div>
          <h1 className="text-5xl font-bold font-serif">Instagram functionality</h1>
          <div>
            <p className='text-gray-400'>USE CASE</p>
          </div>
          <br />
          <div>
            This Case Study will soon be updated. :)
          </div>
          <ul className="flex my-10">
            <li className='bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900
                bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px]
                transition-all duration-500 ease-out flex items-center'>
              <NavLink href="/page-not-found" title="View Use Case" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 ml-2 text-rose-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-1/2">
      <img src="/usecase1.png" alt="Image" />
    </div>
  </div>


      {/* USE CASE 2 */}
      <div className="flex mx-20 border-b py-40">
  <div className="w-1/2">
    <img src="/usecase2.png" alt="Image" />
  </div>
  <div className="w-1/2 pl-20">
    <div className="flex">
      <img className="w-14 h-14 animate-spin mr-10" src="./yellow-400.svg" alt="yellow icon"></img>
      <div>
        <h1 className="text-5xl font-bold font-serif">Settings page</h1>
        <div>
        <p className='text-gray-400'>USE CASE</p>
        </div>
        <br />
        <div>
          This Case Study will soon be updated. :)
        </div>
        <ul className="flex my-10">
            <li className='bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900
                bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px]
                transition-all duration-500 ease-out flex items-center'>
              <NavLink href="/page-not-found" title="View Use Case" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 ml-2 text-yellow-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </li>
          </ul>
      </div>
    </div>
  </div>
</div>

      {/* USE CASE 3 */}
      <div className="flex mx-20 border-b py-40">
    <div className="w-1/2 pr-20">
      <div className="flex">
      <img className="w-14 h-14 animate-spin mr-10" src="./blue-500.svg" alt="blue icon"></img>

        <div>
          <h1 className="text-5xl font-bold font-serif">User profile</h1>
          <div>
          <p className='text-gray-400'>USE CASE</p>
      </div>
      <br />
      <div>
      This Case Study will soon be updated. :)
      </div>
      <ul className="flex my-10">
            <li className='bg-left-bottom bg-gradient-to-r from-gray-900 to-gray-900
                bg-[length:0%_1px] bg-no-repeat hover:bg-[length:100%_1px]
                transition-all duration-500 ease-out flex items-center'>
              <NavLink href="/page-not-found" title="View Use Case" />
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-6 h-6 ml-2 text-blue-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="w-1/2">
      <img src="/usecase3.png" alt="Image" />
    </div>
</div>

      <div className="max-w-full">
        <img src="/magazine.png" alt="Magazine" />
      </div>
    </div>
  );
};

export default CreaSection;
