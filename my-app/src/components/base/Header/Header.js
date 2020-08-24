import React from 'react';

import Wrapper from './../Wrapper';

function Header() {

  return (
    <header>
      <Wrapper>
        <div className="header">
          <a href="#"><div className="header-logo"></div></a>
          <a href="tel:888" className="header-phone"></a>
          <div className="header-phonelink">
            <a href="tel:7(962)556-1234">+7(962)556-1234</a>
          </div>
			  </div>
      </Wrapper>
    </header>
  );
};

export default Header;
