import { FaAngleRight, FaLinkedin } from "react-icons/fa";
import { Copyright } from "./copyright";

export const Footer = ({ datas }) => {
 const data = datas[0].fields;
 return (
  <>
   <div class="section-dark sec-padding-5">
    <div class="container">
     <div class="footers">
      <div class="col-md-3  colmargin clearfix margin-bottom">
       <div class="fo-map">
        <div class="footer-logo">
         <img src={data.logo.fields.file.url} alt="" />
         <span class="reg-icon"> &reg;</span>
        </div>
        <p class="text-light">{data.aboutcodem.Desc1}</p>
        <p class="text-light">{data.aboutcodem.Desc2}</p>
       </div>
      </div>

      <div class="col-md-2 col-xs-12 clearfix margin-bottom margins">
       <h4 class="text-white less-mar3 font-weight-5">
        {data.navLinksHeader[0]}
       </h4>
       <div class="clearfix"></div>
       <br />
       <ul class="footer-quick-links-4 white" style={{ width: "102%" }}>
        {data.aboutLinksList.map((e) => {
         return (
          <li>
           <a href="ecommerce-tech.html">
            <FaAngleRight /> {e}
           </a>
          </li>
         );
        })}
       </ul>
      </div>
      <div
       class="col-md-2 col-xs-12 clearfix margin-bottom"
       style={{ marginLeft: "1rem" }}
      >
       <h4 class="text-white less-mar3 font-weight-5">
        {data.navLinksHeader[1]}
       </h4>
       <div class="clearfix"></div>
       <br />
       <ul class="footer-quick-links-4 white">
        {data.quickLinksList.map((e) => {
         return (
          <li>
           <a href="contact.html">
            <FaAngleRight /> {e}
           </a>
          </li>
         );
        })}
       </ul>
      </div>
      <div class="col-md-5 col-xs-12 clearfix margin-bottom">
       <h4 class="text-white less-mar3 font-weight-5">
        {data.navLinksHeader[2]}
       </h4>
       <div class="clearfix"></div>
       <br />
       <div class="row foot-address">
        <div
         class="col-md-6 col-xs-12 clearfix margin-bottom"
         style={{ marginLeft: "1rem" }}
        >
         <address class="text-light">
          <strong class="text-white">{data.contactSanFrancisco.title}</strong>{" "}
          <br />
          {data.contactSanFrancisco.Add1},
          <br />
          {data.contactSanFrancisco.Add2},
         </address>
         <span class="text-light">
          <strong class="text-white">Phone:</strong>{" "}
          {data.contactSanFrancisco.phone}
         </span>
         <br />
         <span class="text-light">
          <strong class="text-white">Email:</strong>{" "}
          {data.contactSanFrancisco.email}
         </span>
         <ul class="footer-social-icons white left-align icons-plain text-center">
          <li>
           <a
            href="https://www.linkedin.com/company/codemtechnologies/"
            target="_blank"
           >
            <img src={data.linkedinlogo.fields.file.url} className="linkedin" />
            {data.socialMedia}
           </a>
          </li>
         </ul>
        </div>
        <div class="col-md-6 col-xs-12 clearfix margin-bottom">
         <address class="text-light" style={{ marginTop: "-2rem" }}>
          <strong class="text-white">
           {data.contactSingapore.title}
           <br />
           {data.contactSingapore.uen}
          </strong>{" "}
          <br />
          {data.contactSingapore.Add1},
          <br />
          {data.contactSingapore.Add2}
         </address>
         <span class="text-light">
          <strong class="text-white">Phone:</strong>{" "}
          {data.contactSingapore.phone}
         </span>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
   <Copyright copy={data.copyright} />
  </>
 );
};
