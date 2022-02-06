import Link from 'next/link';

import Layout from '../sections/Layout';

const UhOh = () => {
  return (
    <Layout
      pageMeta={{
        title: 'Uh oh! You found a missing page...',
      }}
    >
      <section className='container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12'>
        <div className='text-center space-y-6'>
          <h1 className='text-3xl sm:text-6xl'>
            Hello from the error side{' '}
            <span role='img' aria-label='waving hand'>
              👋
            </span>
          </h1>
          <p className='text-xl'>
            We couldn&apos;t find the page you are looking for{' '}
            <span role='img' aria-label='see-no-evil monkey'>
              🙈
            </span>
          </p>
        </div>
        <p className='text-lg sm:text-xl'>
          Want to{' '}
          <Link href='/' passHref>
            <a className='text-sky-500 hover:text-sky-600 py-1 rounded-md focus:outline-none focus:ring-4 focus:ring-sky-500 focus:ring-opacity-50 whitespace-nowrap'>
              go home
            </a>
          </Link>
          ?
        </p>
      </section>
    </Layout>
  );
};

export default UhOh;
