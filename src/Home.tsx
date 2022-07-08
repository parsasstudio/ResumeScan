import React from 'react';

export function Home() {
  return (
    <>
      {/* Welcome to ResumeScan Component */}
      <div className="d-flex justify-content-center align-content-center mt-5">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H38C39.1046 44 40 43.1046 40 42V6C40 4.89543 39.1046 4 38 4Z" fill="#7779FC" stroke="#222364" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M28 16C28 17.3807 27.4404 18.6307 26.5355 19.5355C25.6307 20.4404 24.3807 21 23 21C20.2386 21 18 18.7614 18 16C18 13.2386 20.2386 11 23 11C25.7614 11 28 13.2386 28 16Z" fill="#7779FC" />
          <path d="M30 23L26.5355 19.5355M26.5355 19.5355C27.4404 18.6307 28 17.3807 28 16C28 13.2386 25.7614 11 23 11C20.2386 11 18 13.2386 18 16C18 18.7614 20.2386 21 23 21C24.3807 21 25.6307 20.4404 26.5355 19.5355Z" stroke="#F2F2FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 30H31" stroke="#F2F2FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M17 36H24" stroke="#F2F2FF" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <div className="flex text-center pb-5 border-bottom-1 font-face dark-purple-font fs-2 fw-bold">Welcome to ResumeScan&copy;</div>
      </div>

      {/* Get Started Now Text */}
      <div className="flex text-center pt-5 pb-5 border-bottom-1 font-face dark-purple-font fs-5">Get started now. <br /> 1) Upload your resume<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28.9125 10.4625L21.0375 2.5875C20.8125 2.3625 20.5875 2.25 20.25 2.25H9C7.7625 2.25 6.75 3.2625 6.75 4.5V31.5C6.75 32.7375 7.7625 33.75 9 33.75H27C28.2375 33.75 29.25 32.7375 29.25 31.5V11.25C29.25 10.9125 29.1375 10.6875 28.9125 10.4625ZM20.25 4.95L26.55 11.25H20.25V4.95ZM27 31.5H9V4.5H18V11.25C18 12.4875 19.0125 13.5 20.25 13.5H27V31.5Z" fill="#222364" />
        <path d="M11.25 24.75H24.75V27H11.25V24.75ZM11.25 18H24.75V20.25H11.25V18Z" fill="#222364" />
      </svg><br />  2) Try searching some keywords and see what happens!</div>
      <div className="flex text-center pb-4 t-5">

      </div>
    </>
  )
}

export function Footer() {
  return (
    <footer>
      <div className="text-center py-3 font-face copyright light-purple-bg dark-purple-font p-3">&copy; Created by <a className="medium-purple-font" href="https://www.linkedin.com/in/parsas/">Parsa Khazaeepoul</a>
      </div>
    </footer>
  );
}