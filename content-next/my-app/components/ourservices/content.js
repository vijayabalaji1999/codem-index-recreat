import { FaCircle } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";

export const Content = ({ data }) => {
 return (
  <>
   {data && (
    <div class="col-md-6 padding-left-5 divOur">
     <div class="col-sm-12 nopadding" style={{ marginTop: "1rem" }}>
      <div class="sec-title-container less-padding-5 text-left">
       <h5 class="font-weight-4 less-mar-1 line-height-4 ce-title-top-text">
        {data.subtitle}
       </h5>
       <h2 class="font-weight-6 less-mar-1 line-height-5">{data.title}</h2>
      </div>
     </div>
     <div class="clearfix"></div>

     <div class="iconlist-2" style={{ marginLeft: "-23px" }}>
      <div class="icon dark">
       <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div class="text">{data.description.Desc1}</div>
     </div>

     <div class="iconlist-2" style={{ marginLeft: "-23px" }}>
      <div class="icon dark">
       <i class="fa fa-check" aria-hidden="true"></i>
      </div>
      <div class="text">{data.description.Desc2}</div>
     </div>

     {data.description["Desc3"] !== undefined && (
      <div class="iconlist-2" style={{ marginLeft: "-23px" }}>
       <div class="icon dark">
        <i class="fa fa-check" aria-hidden="true"></i>
       </div>
       <div class="text">{data.description.Desc3}</div>
      </div>
     )}

     <div
      class="iconlist-2"
      // style={{
      //  marginBottom: "4rem",
      //  marginLeft: "1rem",
      // }}
     >
      {data.description.Lists !== undefined &&
       data.description.Lists.map((e) => {
        return (
         <div class="icons-list-1 icon-tiny">
          <div class="icon dark">
           <FaCircle style={{ fontSize: "8px" }} />
          </div>
          <div class="text" style={{ marginBottom: "10px" }}>
           {e}
          </div>
         </div>
        );
       })}
     </div>

     <div style={{ marginBottom: "2rem" }}>
      <a
       class="btn btn-dark btn-round btn-medium uppercase"
       href="javascript:void(0)"
      >
       <FaPlayCircle className="play" />
       REMOVE
      </a>
     </div>
    </div>
   )}
  </>
 );
};
