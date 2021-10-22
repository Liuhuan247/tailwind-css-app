import React from 'react';
import './App.css';
import { Button, Card } from './components';

function App() {
  return (
    <div className="p-2">
      <Button type="primary">按钮</Button>

      <Card head={'这是一个头部'}>这是一个卡片</Card>
    </div>
  );
}

export default App;
