const Footer = () => {
  return (
    <footer className='px-4 sm:px-6 py-6 mt-24'>
      <p className='text-center text-sm text-neutral-500'>
        © {new Date().getFullYear()} New Project
      </p>
    </footer>
  );
};

export default Footer;
