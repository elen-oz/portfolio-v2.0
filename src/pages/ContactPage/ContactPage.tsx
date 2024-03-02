import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';
import bgColors from '../../utils/colors';

const ContactPage = () => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='z-90 relative h-screen uppercase'>
      <div className='z-100 fixed left-8 top-[250px] md:px-8'>
        <ul className='text-6xl'>
          <li className='lowercase'>&#8921;SCROLL&#8920;</li>

          <li className='hover:text-white'>
            <Link to='/work'>work</Link>
          </li>
          <li className='hover:text-white'>
            <a
              href='https://rebrand.ly/elen-oz-cv'
              target='_blank'
              rel='noreferrer'
            >
              resume
            </a>
          </li>

          <li className='text-lg'>&rsaquo; contact me &rsaquo;</li>

          <li className='hover:text-white'>
            <a href='mailto: ozerova.lenka@gmail.com?subject=Mail from Portfolio Site'>
              Email me
            </a>
          </li>

          <li className='hover:text-white'>
            <a
              href='https://www.linkedin.com/in/elen-oz/'
              target='_blank'
              rel='noreferrer'
            >
              LinkedIn
            </a>
          </li>

          <li className='hover:text-white'>
            <a
              href='https://github.com/elen-oz'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github
            </a>
          </li>
          <li className='hover:text-white'>
            <CopyToClipboard text='@elenoz'>
              <div className='text-left' onClick={onCopy}>
                {copied ? 'username is copied' : 'TELEGRAM'}
              </div>
            </CopyToClipboard>
          </li>
        </ul>
      </div>

      {bgColors.map((color, index) => (
        <div key={index} className={`h-full ${color}`} />
      ))}
    </div>
  );
};
export default ContactPage;
