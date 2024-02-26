import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

const bgColors = [
  'bg-stone-600',
  'bg-white',
  'bg-blue',
  'bg-white',
  'bg-sky',
  'bg-yellow',
  'bg-purple',
  'bg-[#daf67c]',
  'bg-grey',
  'bg-green',
  'bg-white',
  'bg-red',
  'bg-rose',
  'bg-violet',
  'bg-yellow',
  'bg-white',
  'bg-grey',
  'bg-purple',
  'bg-red',
  'bg-green',
  'bg-sky',
  'bg-yellow',
  'bg-violet',
  'bg-grey',
  'bg-[#adebb2]',
  'bg-violet',
  'bg-white',
  'bg-blue',
  'bg-yellow',
  'bg-purple',
  'bg-[#daf67c]',
  'bg-grey',
  'bg-green',
  'bg-white',
  'bg-red',
  'bg-rose',
  'bg-violet',
  'bg-yellow',
  'bg-white',
  'bg-grey',
  'bg-purple',
  'bg-red',
  'bg-green',
  'bg-sky',
  'bg-yellow',
];

const ContactPage = () => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='relative z-90 h-screen uppercase'>
      <div className='fixed z-100 top-[250px] left-8 md:px-8'>
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
