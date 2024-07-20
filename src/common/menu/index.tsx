import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { RouterKeys, routersData, superAdminMenus } from '@/config';
import { useNavigate } from 'react-router-dom';
import usePathKey from '@/hooks/usePathKey';



const App: React.FC = () => {
  const [current, setCurrent] = useState('');
  const Navigate = useNavigate()
  const path_key = usePathKey()
  const menes = superAdminMenus
  useEffect(()=>{
    if(path_key){
      setCurrent(path_key)
    }
  },[])
  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
    Navigate(routersData[e.key as RouterKeys].path)
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={menes} />;
};

export default App;