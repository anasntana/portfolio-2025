import Link from 'next/link';
import React from 'react';

const Navlink = ({ href, title }) => (
  <Link href={href}>
    <div className="block py-2 pl-3 pr-4 sm:text-s font-sans rounded md:p-0 text-gray-700">
      {title}
    </div>
  </Link>
);

export default Navlink;