import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const RenderLinks = links.map((word) => {return <a key={word} href={"#" + word}> {word} </a> } )
  return RenderLinks;
}

export default NavBar;
