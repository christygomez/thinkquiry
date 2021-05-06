import React from 'react';
import { SidebarContainer, Icon, CloseIcon } from './SidebarElements';

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <Icon>
          <CloseIcon></CloseIcon>
        </Icon>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
