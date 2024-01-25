import React from "react"

const currrentDate = new Date();
const year = currrentDate.getFullYear();


function Footer() {
  return(
    <footer>
      <p>copyright {year}</p>
    </footer>
  )
}


export default Footer;
