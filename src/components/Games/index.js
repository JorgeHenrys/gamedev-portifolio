import React from "react";
import "./styles.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import logoGame1 from "../../assets/images/logo_game1.png";
import screenShot0Game1 from "../../assets/images/image0.jpeg";
import screenShot1Game1 from "../../assets/images/image1.jpeg";
import screenShot2Game1 from "../../assets/images/image2.jpeg";
import screenShot3Game1 from "../../assets/images/image3.jpeg";
import gif1Game1 from "../../assets/images/prision_cave1.gif";
import gif2Game1 from "../../assets/images/prision_cave2.gif";
import gif3Game1 from "../../assets/images/prision_room.gif";

export default function Games() {
  return (
    <div className="games" id="games">
      <h2>Games</h2>
      <div className="game">
        <img alt="" src={logoGame1} height="400" />

        <AliceCarousel autoPlay autoPlayInterval="3000">
            <img alt="" src={gif1Game1} />
            <img alt="" src={screenShot0Game1} />
            <img alt="" src={screenShot1Game1} />
            <img alt="" src={gif2Game1} />
            <img alt="" src={screenShot2Game1} />
            <img alt="" src={screenShot3Game1} />
            <img alt="" src={gif3Game1} />
        </AliceCarousel>
      </div>

      
    </div>
  );
}
