import React from 'react';
import { Nav, NavList, NavItem, NavExpandable, PageSidebar } from '@patternfly/react-core';
import { UserIcon, ChartLineIcon, ApplicationsIcon, UserFriendsIcon } from '@patternfly/react-icons';

const Menu = ({ isNavOpen }) => {
  const [activeGroup, setActiveGroup] = React.useState('monitoring-group');
  const [activeItem, setActiveItem] = React.useState('monitoring-group_dashboard');
  const onSelect = result => {
    setActiveGroup(result.groupId);
    setActiveItem(result.itemId);
  };
  const onToggle = result => {
    console.log(`Group ${result.groupId} expanded? ${result.isExpanded}`);
  };
  const menu = <Nav onSelect={onSelect} onToggle={onToggle} aria-label="side-mneu-navigation" isExpanded={isNavOpen}>
  <NavList>
    <NavExpandable title="Monitoring" groupId="monitoring-group" isActive={activeGroup === 'monitoring-group'} isExpanded>
      <NavItem preventDefault id="dashboard" to="#dashboard" groupId="monitoring-group" itemId="monitoring-group_dashboard" isActive={activeItem === 'monitoring-group_dashboard'}>
        <ChartLineIcon />
        &nbsp;&nbsp;Dashboard
      </NavItem>
      <NavItem preventDefault id="application" to="application" groupId="monitoring-group" itemId="monitoring-group_application" isActive={activeItem === 'monitoring-group_application'}>
        <ApplicationsIcon />
        &nbsp;&nbsp;Application
      </NavItem>
    </NavExpandable>
    <NavExpandable title="User Management" groupId="user_management-group" isActive={activeGroup === 'user_management-group'} isExpanded>
      <NavItem preventDefault id="account" to="#account" groupId="user_management-group" itemId="user_management-group_account" isActive={activeItem === 'user_management-group_account'}>
        <UserIcon />
        &nbsp;&nbsp;Account
      </NavItem>
      <NavItem preventDefault id="role" to="#role" groupId="user_management-group" itemId="user_management-group_role" isActive={activeItem === 'user_management-group_role'}>
        <UserFriendsIcon />
        &nbsp;&nbsp;Role
      </NavItem>
    </NavExpandable>
  </NavList>
</Nav>
  return ( 
    <PageSidebar nav={menu} isNavOpen={isNavOpen} id="vertical-sidebar"/>
  );
};

export default Menu;