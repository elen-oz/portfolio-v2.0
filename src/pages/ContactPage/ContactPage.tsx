import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import useMenuStore from '../../stores/menuStore.ts';
// import bgColors from '../../utils/colors';

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const closeMenu = useMenuStore((state) => state.closeMenu)

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    closeMenu()
  }, [closeMenu])

  return (
      <div className='z-90 relative scrollbar-hide-y h-screen overflow-y-auto uppercase bg-yellow'>
        <div className='z-100 sticky left-8 top-[100px] px-4 md:px-8 min-[1600px]:translate-x-[10rem] min-[2000px]:translate-x-[15rem] min-[2300px]:translate-x-[25rem]'>
          <ul className='text-4xl sm:text-6xl'>
            {/*<li className='lowercase'>&#8921;SCROLL&#8920;</li>*/}

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
                <div className='text-left max-w-[200px] sm:max-w-[250px]' onClick={onCopy}>
                  {copied ? 'username is copied' : 'TELEGRAM'}
                </div>
              </CopyToClipboard>
            </li>
          </ul>
        </div>

        {/*<div*/}
        {/*    className='fixed text-md text-end text-gray-500 min-[600px]:text-start min-[600px]:text-2xl  bottom-16 right-10  min-[600px]:bottom-36  min-[600px]:translate-x-[1rem]   min-[600px]:rotate-90 min-[600px]:transform    min-[2500px]:translate-x-[-26rem]'>*/}
        {/*  scroll for fun*/}
        {/*</div>*/}

        {/*{bgColors.map((color, index) => (*/}
        {/*    <div key={index} className={`h-full ${color}`}/>*/}
        {/*))}*/}
      </div>
  );
};
export default ContactPage;
