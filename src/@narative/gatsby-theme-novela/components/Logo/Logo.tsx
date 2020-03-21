import React from "react";
import styled from "@emotion/styled";
import Image from "@components/Image";

import mediaqueries from "@styles/media";

import { Icon } from "@types";

const Logo: Icon = ({ isDark = false }) => {
  return (
    <LogoContainer>
      {isDark ? (
        <Image className="Logo__Desktop" src={`logo_inverted.png`} />
      ) : (
        <Image className="Logo__Desktop" src={`logo.png`} />
      )}
    </LogoContainer>
  );
};

export default Logo;

const LogoContainer = styled.div`
  img {
    height: 80px;
    width: auto;
  }

  .Logo__Mobile {
    display: none;
  }

  ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }
    
    .Logo__Mobile {
      display: block;
    }
  `}
`;
