import React from 'react';
import brandImg2 from './brandImgColor2.svg';
import {LoginFooterItem, LoginForm, LoginMainFooterBandItem, LoginMainFooterLinksItem, LoginPage, ListItem, ListVariant} from '@patternfly/react-core';
import ExclamationCircleIcon from '@patternfly/react-icons/dist/esm/icons/exclamation-circle-icon';
export const LoginPageHideShowPassword = () => {
  const [showHelperText, setShowHelperText] = React.useState(false);
  const [username, setUsername] = React.useState('');
  const [isValidUsername, setIsValidUsername] = React.useState(true);
  const [password, setPassword] = React.useState('');
  const [isValidPassword, setIsValidPassword] = React.useState(true);
  const [isRememberMeChecked, setIsRememberMeChecked] = React.useState(false);
  const handleUsernameChange = value => {
    setUsername(value);
  };
  const handlePasswordChange = value => {
    setPassword(value);
  };
  const onRememberMeClick = () => {
    setIsRememberMeChecked(!isRememberMeChecked);
  };
  const onLoginButtonClick = event => {
    event.preventDefault();
    setIsValidUsername(!!username);
    setIsValidPassword(!!password);
    setShowHelperText(!username || !password);
  };
  

  const loginForm = <LoginForm showHelperText={showHelperText} helperText="Invalid login credentials." helperTextIcon={<ExclamationCircleIcon />} usernameLabel="Username" usernameValue={username} onChangeUsername={handleUsernameChange} isValidUsername={isValidUsername} passwordLabel="Password" passwordValue={password} isShowPasswordEnabled onChangePassword={handlePasswordChange} isValidPassword={isValidPassword} rememberMeLabel="Keep me logged in for 30 days." isRememberMeChecked={isRememberMeChecked} onChangeRememberMe={onRememberMeClick} onLoginButtonClick={onLoginButtonClick} loginButtonLabel="Log in" />;
  const images = {
    lg: '/assets/images/pfbg_1200.jpg',
    sm: '/assets/images/pfbg_768.jpg',
    sm2x: '/assets/images/pfbg_768@2x.jpg',
    xs: '/assets/images/pfbg_576.jpg',
    xs2x: '/assets/images/pfbg_576@2x.jpg'
  };
  return <LoginPage footerListVariants={ListVariant.inline} brandImgSrc={brandImg2} brandImgAlt="PatternFly logo" backgroundImgSrc={images} footerListItems={listItem} textContent="This is placeholder text only. Use this area to place any information or introductory message about your application that may be relevant to users." loginTitle="Log in to your account" loginSubtitle="Enter your single sign-on LDAP credentials." socialMediaLoginContent={socialMediaLoginContent} signUpForAccountMessage={signUpForAccountMessage} forgotCredentials={forgotCredentials}>
      {loginForm}
    </LoginPage>;
};