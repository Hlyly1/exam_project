import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { superAdminMenus } from '@/config';



const App: React.FC = () => {
  const [current, setCurrent] = useState('');
  
  const menes = superAdminMenus
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menes} />;
};

export default App;