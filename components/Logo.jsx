import Link from 'next/link';

import { TerminalIcon } from '@heroicons/react/outline';

const Logo = () => {
  return (
    <Link href='/' passHref>
      <a className='flex items-center space-x-1 text-sky-500'>
        <TerminalIcon className='w-8 h-8 flex-shrink-0' />
        <span className='font-bold text-lg tracking-tight whitespace-nowrap'>new_project</span>
      </a>
    </Link>
  );
};

export default Logo;
