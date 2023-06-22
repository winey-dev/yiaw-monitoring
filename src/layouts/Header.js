import React from 'react';
import { MastheadToggle, Masthead, MastheadMain, MastheadBrand, MastheadContent, Toolbar, ToolbarContent, ToolbarItem } from '@patternfly/react-core';
import { PageToggleButton } from '@patternfly/react-core';
import BarsIcon from '@patternfly/react-icons/dist/esm/icons/bars-icon';

const Header = ({ isNavOpen, onNavToggle }) => {
  const headerToolbar = (
    <Toolbar id="vertical-toolbar">
      <ToolbarContent>
        <ToolbarItem>header-tools</ToolbarItem>
      </ToolbarContent>
    </Toolbar>
  );

  return (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton variant="plain" aria-label="Global navigation" isNavOpen={isNavOpen} onNavToggle={onNavToggle} id="vertical-nav-toggle">
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain>
        <MastheadBrand href="https://patternfly.org" target="_blank">
          Logo
        </MastheadBrand>
      </MastheadMain>
      <MastheadContent>{headerToolbar}</MastheadContent>
    </Masthead>
  );
};

export default Header;
