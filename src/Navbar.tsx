import React from 'react';


export function Navbar() {
  return (
    <>
      <nav className="navbar sticky-top flex-md-nowrap p-0 font-face medium-purple-bg">
        <a className="navbar-brand col-sm-2 col-md-1 light-purple-font" href="/">Home</a>
        <a className="navbar-brand col-sm-2 col-md-1 light-purple-font" href="/resume-upload">Upload Resume</a>
        <form action="search.php" method="POST" className="w-100">
          <input className="form-control form-control-dark medium-purple-font" type="text" placeholder="Search" />
        </form>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link light-purple-font" href="/about">ResumeScan&copy;</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
