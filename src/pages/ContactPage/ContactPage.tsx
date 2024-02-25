import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useState } from 'react';

const bgColors = [
  'bg-stone-600',
  'bg-yellow',
  'bg-blue',
  'bg-white',
  'bg-blue',
  'bg-white',
  'bg-purple',
  'bg-grey',
  'bg-green',
  'bg-white',
  'bg-red',
  'bg-rose',
  'bg-violet',
  'bg-yellow',
  'bg-sky',
  'bg-white',
  'bg-blue',
  'bg-white',
  'bg-grey',
  'bg-purple',
  'bg-red',
  'bg-green',
  'bg-yellow',
  'bg-sky',
  'bg-violet',
  'bg-grey',
  'bg-[#daf67c]',
  'bg-[#92400e]',
  'bg-[#adebb2]',
  'bg-violet',
  'bg-yellow',
  'bg-blue',
];

const ContactPage = () => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className='z-90 h-screen uppercase'>
      <div className='fixed z-100 mt-[1vh] top-[80px] left-8 h-full w-full md:px-8'>
        <div className='h-[80vh] flex flex-col justify-end items-start'>
          <ul className='flex flex-col text-6xl'>
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
      </div>

      {bgColors.map((color, index) => (
        <div key={index} className={`h-full ${color}`} />
      ))}
    </div>
  );
};
export default ContactPage;
