import React from "react";
import styled from "styled-components";
import sticker from "../assets/images/yellow-sticker.svg";

const HeaderStyled = styled.div`
  position: relative;
  height: 246px;
  display: flex;
  align-items: center;
  justify-content: center;
  .wrapper {
    width: 343px;
    height: 106px;
    position: relative;
  }
  img {
    position: absolute;
    top: -20px;
    z-index: -1;
    right: -64px;
  }
  @media (min-width: 768px) {
    padding-top: 50px;
  }
`;

function Header() {
  return (
    <HeaderStyled>
      <div className="wrapper">
        <h1 data-aos="fade-right" data-aos-duration="1500">
          Book a place to camp
        </h1>
        <img
          data-aos="fade-left"
          data-aos-duration="1500"
          src={sticker}
          alt="sticker"
        />
      </div>
    </HeaderStyled>
  );
}

export default Header;
