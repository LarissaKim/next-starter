import { useEffect, useState } from 'react';

import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';

import Logo from '../components/Logo';

const TopNav = () => {
  const [hasMounted, setHasMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!hasMounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return <SunIcon className='w-7 h-7' role='button' onClick={() => setTheme('light')} />;
    } else {
      return <MoonIcon className='w-7 h-7' role='button' onClick={() => setTheme('dark')} />;
    }
  };

  return (
    <header className='backdrop-blur-sm'>
      <div className='container mx-auto px-4 sm:px-6 py-4 flex justify-between items-center'>
        <Logo />
        {renderThemeChanger()}
      </div>
    </header>
  );
};

export default TopNav;
