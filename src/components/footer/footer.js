import "./footer.css";
import React from "react";
import { CFooter, CLink } from "@coreui/react";
import data from "./footerData.json";

// Need to make individual <li> collapseable. The commented code is the "non-React component version"
const Footer = () => {
  return (
    <div>
      <CFooter className="footer">
      <CButton color="secondary" size="lg" onClick={() => setVisible(!visible)}>Contacts</CButton>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader onClose={() => setVisible(false)}>
          <CModalTitle>Team Members</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <ul id="memberList">
          <li>
            <CLink
              href="https://github.com/Bsayavong"
              alt="link to contributors GitHub Profile."
              target="blank"
            >
              Bryan Sayavong
            </CLink>
          </li>
          <li>
            <CLink
              href="https://github.com/csandu123"
              alt="link to contributors GitHub Profile."
              target="blank"
            >
              Cosmin Sandu
            </CLink>
          </li>
          <li>
            <CLink
              href="https://github.com/jleebootcamp"
              alt="link to contributors GitHub Profile."
              target="blank"
            >
              Joon Lee
            </CLink>
          </li>
          <li>
            <CLink
              href="https://github.com/mncole98"
              alt="link to contributors GitHub Profile."
              target="blank"
            >
              Matthew Cole
            </CLink>
          </li>
          <li>
            <CLink
              href="https://github.com/sheetaljwl795"
              alt="link to contributors GitHub Profile."
              target="blank"
            >
              Sheetal Jawale
            </CLink>
          </li>
          <li>
            <CLink
              href="https://github.com/snovelli1021"
              alt="link to contributors GitHub Profile."
              target="blank"
            >
              Stephen Novelli
            </CLink>
          </li>
          </ul>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
        </CModalFooter>
      </CModal>
      <div id="copyright">
        © 2022 Copyright:
        <a> Team 7 </a>{" "}
        {/* Wallpaper Source Citation: StarLineArts, "World map with circular particles background", iStockPhoto.com, April 06, 2019 */}
        <a href="https://www.istockphoto.com/vector/world-map-with-circular-particles-background-gm1140757772-305381386">(Wallpaper Image Source)</a>
        </div>
      </CFooter>
    </div>
  );
};
export default Footer;
