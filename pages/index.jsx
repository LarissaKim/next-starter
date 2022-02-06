import Layout from '../sections/Layout';

const Home = () => {
  return (
    <Layout>
      <section className='flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32'>
        <div className='space-y-4 max-w-4xl mx-auto text-center'>
          <h1 className='text-4xl sm:text-7xl font-bold'>Your new project</h1>
          <h2 className='text-xl sm:text-2xl'>What value will you be providing today?</h2>
        </div>
        <button
          type='button'
          onClick={null}
          className='bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-md border-2 border-sky-500 hover:border-sky-600 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-sky-500 focus:ring-opacity-50 whitespace-nowrap'
        >
          Start creating
        </button>
      </section>
    </Layout>
  );
};

export default Home;
