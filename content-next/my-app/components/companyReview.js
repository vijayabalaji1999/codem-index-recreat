import { Investment } from "./investment";

export const Companyreview = ({ data }) => {
 return (
  <>
   {data.map((e) => {
    if (e.fields.maintitle === "Company Overview") {
     return (
      <section
       class="sec-padding-5 section-light back"
       style={{ height: "32rem" }}
      >
       <div class="container compantreview">
        <div class="row">
         <div
          class="col-md-6 animate-in pull-left"
          data-anim-type="fade-in-right"
          data-anim-delay="100"
         >
          {" "}
          <img
           src={e.fields.images[0].fields.file.url}
           alt=""
           style={{ width: "568px", height: "417px" }}
           class="img-responsive overview-img"
          />{" "}
         </div>
         <div
          class="col-md-6 margin-bottom animate-in pull-right"
          data-anim-type="fade-in-left"
          data-anim-delay="150"
         >
          <div class="col-sm-12 nopadding">
           <div class="sec-title-container less-padding-4 text-left">
            <h2 class="font-weight-6 less-mar-1 line-height-5">
             {e.fields.title}
            </h2>
            <div class="ce-title-line align-left"></div>
           </div>
          </div>
          <div class="clearfix"></div>
          <p class="running-text">{e.fields.description}</p>
          <br />
          <ul class="about-logo">
           {e.fields.images.map((e1) => {
            if (e1.fields.title !== "Sabon") {
             return (
              <li>
               <img src={e1.fields.file.url} alt="Amazon" />{" "}
              </li>
             );
            }
           })}
          </ul>
          <div class="clearfix"></div>
         </div>
        </div>
       </div>
      </section>
     );
    }
    if (e.fields.maintitle === "Investment") {
     return <Investment data={e.fields} />;
    }
   })}
  </>
 );
};
