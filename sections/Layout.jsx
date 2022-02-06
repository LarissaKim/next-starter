import Head from 'next/head';
import { useRouter } from 'next/router';

import Footer from './Footer';
import TopNav from './TopNav';

const Layout = ({ children, pageMeta }) => {
  const router = useRouter();

  const meta = {
    title: 'New Project',
    description: 'Welcome to your new project',
    type: 'website',
    ...pageMeta,
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='description' content={meta.description} />
        <link rel='icon' href='/favicon.ico' />
        <meta property='og:url' content={`http://localhost:3000${router.asPath}`} />
        <meta property='og:site_name' content='New Project' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        {meta.date && <meta property='article:published_time' content={meta.date} />}
      </Head>
      <div className='min-h-screen flex flex-col'>
        <TopNav />
        <main className='flex-grow container mx-auto px-4 sm:px-6'>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
