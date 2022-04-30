import React, { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import SideBar from './components/side-bar/SideBar';
import { Hoaxes } from './pages/hoaxes/Hoaxes';
import Home from './pages/home/Home';
import { Hospitals } from './pages/hospitals/Hospitals';
import { News } from './pages/news/News';
import { Testing } from './pages/Testing/Testing';
import { Vaccination } from './pages/Vaccination/Vaccination';


export class App extends Component<{}>{

  // constructor(props: any) {
  //   super(props);
  // }

  render() {
    return (
      <main className="App">
        <header>
          <div className='container header-logo'>
            <h1>Coronavirus (COVID-19) in Indonesia</h1>
          </div>
        </header>
        <div className='container p-0'>
          <p className='my-3'>Last updated on Friday, 25 March 2022 at 12:00pm</p>
          <div className='wrapper row'>
            <div className='menus-wrapper col-md-2'>
              <SideBar />
            </div>
            <div className='content-wrapper col-md-10'>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="testing" element={<Testing />} />
                <Route path="vaccination" element={<Vaccination />} />
                <Route path="hospitals" element={<Hospitals />} />
                <Route path="hoaxes" element={<Hoaxes />} />
                <Route path="news" element={<News />} />
              </Routes>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
