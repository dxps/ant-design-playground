import React from 'react';
import { Button } from 'antd';
import './NotFound.scss';

const NotFoundPage = () => {
  return (
    <div className="normal">
      <div className="container">
        <h1 className="title">404</h1>
        <p className="desc">The page was not found</p>
        <a href="/"><Button type="primary" style={{ marginTop: 5 }}>Back to home</Button></a>
      </div>
    </div>
  );
};

export default NotFoundPage;
