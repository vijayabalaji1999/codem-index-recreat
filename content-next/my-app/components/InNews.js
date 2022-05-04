export const Innews = ({ data }) => {
 return (
  <>
   {data.map((e) => {
    if (e.fields.title === "In the News") {
     return (
      <section
       class="section-side-image sec-padding-5 clearfix animate-in"
       data-anim-type="fade-in-right"
       data-anim-delay="300"
      >
       <div class="container">
        <div class="row">
         <div class="col-sm-12">
          <div class="sec-title-container text-center">
           <h2 class="font-weight-6 less-mar-1 line-height-5">
            {e.fields.title}
           </h2>
           <div class="ce-title-line"></div>
          </div>
         </div>
         <div class="clearfix"></div>
        </div>
        <div class="row innews">
         <div class="col-md-8 col-md-offset-2">
          <div id="news-section" class="owl-carousel owl-theme news-list flex">
           {e.fields.images.map((e1) => {
            return (
             <div class="item">
              <a
               href="https://www.businesstimes.com.sg/companies-markets/f-j-benjamin-sets-up-advisory-board-to-integrate-online-and-offline-retail"
               target="_blank"
              >
               <img src={e1.fields.file.url} alt="" />
              </a>
             </div>
            );
           })}
          </div>
         </div>
        </div>
       </div>
      </section>
     );
    }
   })}
  </>
 );
};
