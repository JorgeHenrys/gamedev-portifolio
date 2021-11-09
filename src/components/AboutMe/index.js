import React from "react";
import "./styles.css";

export default function AboutMe() {
  return (
    <div className="about-me" id="about-me">
      <h2>About Me</h2>
      <p>
        Hi, my name is Jorge Henrique, I'm a Computer Engineering student,
        graduated in Science and Technology and passionate about games. My goal
        is to become a great connoisseur of the game development area and have
        great projects on the market that will be recognized around the world.
        I've been studying the Unity tool and engine for a little less than a
        year, along with all the other elements that make up a game project,
        such as game design, arts and programming, which is my main work tool.
        <br />
        <br />
        My Skills
        <br />
        <img
          alt=""
          src="https://www.gamefactory.by/images/gfdata/articles/tech/unity3d-icon.png"
          height="80"
        />
        <img
          alt=""
          src="https://user-images.githubusercontent.com/6718144/101553774-3bc7b000-39ad-11eb-8a6a-de2daa31bd64.png"
          height="100"
        />
        <img
          alt=""
          src="https://www.xp-pen.pt/Uploads/forum/images/2021/03/17/1615977421803167.jpg"
          height="60"
        />
        <img
          alt=""
          style={{marginLeft: '10px'}}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Calligra_Krita_icon.svg/1200px-Calligra_Krita_icon.svg.png"
          height="80"
        />
        <img
          alt=""
          style={{marginLeft: '10px'}}
          src="https://community.aseprite.org/uploads/default/original/1X/41b8dccda51104ccd560162c19a25b5671eef5f7.png"
          height="80"
        />
        <img
          alt=""
          src="https://cdn.dribbble.com/users/528264/screenshots/3140440/media/5f34fd1aa2ebfaf2cd548bafeb021c8f.png?compress=1&resize=400x300"
          height="100"
        />
      </p>
    </div>
  );
}
