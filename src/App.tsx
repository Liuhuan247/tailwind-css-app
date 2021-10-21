import React from 'react';
import './App.css';
import { Card } from './components';

function App() {
  return (
    <div className="container mx-auto">
      <button
        type="button"
        className="dark:bg-green-200 bg-yellow-400 text-primary"
      >
        这是一个按钮
      </button>
      <Card head={'这是一个头部'}>这是一个卡片</Card>
    </div>
  );
}

export default App;
