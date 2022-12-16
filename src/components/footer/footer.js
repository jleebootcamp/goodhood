import "./footer.css";
import React from "react";
import { CFooter, CLink } from "@coreui/react";
import data from "./footerData.json";

// Need to make individual <li> collapseable. The commented code is the "non-React component version"
const Footer = () => {
  return (
    <div>
      <CFooter className="footer">
        {data.map(({ url, contributor }) => (
          <div key={url}>
            <ul id="members">
              <li>
                <CLink
                  href={url}
                  alt="link to contributors GitHub Profile."
                  target="blank"
                >
                  {contributor}
                </CLink>
              </li>
            </ul>
          </div>
        ))}
        <div id="copyright">
          © 2022 Copyright:
          <a> Team 7</a>{" "}
        </div>
      </CFooter>
    </div>
  );
};

// const Footer = () => {
//   return (
//     <div>
//       <CFooter>
//         <div className="footer">
//           <ul id="members">
//             <li>
//               <CLink
//                 href="https://github.com/Bsayavong"
//                 alt="link to contributors GitHub Profile."
//                 target="blank"
//               >
//                 Bryan Sayavong
//               </CLink>
//             </li>
//             <li>
//               <CLink
//                 href="https://github.com/csandu123"
//                 alt="link to contributors GitHub Profile."
//                 target="blank"
//               >
//                 Cosmin Sandu
//               </CLink>
//             </li>
//             <li>
//               <CLink
//                 href="https://github.com/jleebootcamp"
//                 alt="link to contributors GitHub Profile."
//                 target="blank"
//               >
//                 Joon Lee
//               </CLink>
//             </li>
//             <li>
//               <CLink
//                 href="https://coreui.io"
//                 alt="link to contributors GitHub Profile."
//                 target="blank"
//               >
//                 Matthew Cole
//               </CLink>
//             </li>
//             <li>
//               <CLink
//                 href="https://github.com/sheetaljwl795"
//                 alt="link to contributors GitHub Profile."
//                 target="blank"
//               >
//                 Sheetal Jawale
//               </CLink>
//             </li>
//             <li>
//               <CLink
//                 href="https://github.com/snovelli1021"
//                 alt="link to contributors GitHub Profile."
//                 target="blank"
//               >
//                 Stephen Novelli
//               </CLink>
//             </li>
//           </ul>
//           <div id="copyright">
//             © 2022 Copyright:
//             <a> Team 7</a>
//           </div>
//         </div>
//       </CFooter>
//     </div>
//   );
// };
export default Footer;
