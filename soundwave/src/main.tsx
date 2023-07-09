import React from 'react';
import ReactDOM from 'react-dom';
import './css/global.css';
import { Layout } from 'antd';
import AppHeader from './components/Header/Header';
import AppContent from './components/body/body';
import { Footer } from 'antd/es/layout/layout';
import './css/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Layout> 
      <AppHeader />
      <AppContent />
      <Footer/>
    </Layout>  
  </React.StrictMode>,
  document.getElementById('root')
);
