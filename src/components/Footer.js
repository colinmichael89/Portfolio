// Footer to be displayed on all pages (links)

const Footer = () => {
  return (
    <footer className='text-center m-1 p-1 mt-auto'>
      <a
        className='footer-item m-1 p-1'
        href='https://github.com/colinmichael89'
        target='_blank'
        rel='noreferrer'
      >
        Github
      </a>
      <a
        className='footer-item m-1 p-1'
        href='https://www.linkedin.com/in/colin-mcnatt-b92516183'
        target='_blank'
        rel='noreferrer'
      >
        LinkedIn
      </a>
      <a
        className='footer-item m-1 p-1'
        href='https://www.pristinecleanbycolin.com'
        target='_blank'
        rel='noreferrer'
      >
        Company Website
      </a>
    </footer>
  );
};

export default Footer;
