import React, {useState} from 'react';
import { Layout, Space } from 'antd';

// components
import MainContent from '../components/MainContent/index';
import Navigation from '../components/Navigation/index';

function Dashboard() {
  return (
    <div style={{display: 'flex'}}>
      <Navigation />

      <Layout>
        <MainContent />
      </Layout>
    </div>
  );
}

export default Dashboard;
