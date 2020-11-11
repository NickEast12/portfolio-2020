import React from 'react';
import CookieConsent from 'react-cookie-consent';

const Cookie = () => (
  <div className="cookie">
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      cookieName="gatsby-gdpr-google-analytics"
      disableStyles
      containerClasses="cookie__wrapper"
      contentClasses="cookie__wrapper__content"
    >
      <p>This site uses cookies </p>
    </CookieConsent>
  </div>
);

export default Cookie;
