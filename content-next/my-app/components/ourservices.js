import { Content } from "./ourservices/content";
import { Images } from "./ourservices/image";

export const Ourservices = ({ datas }) => {
 const data = [...datas].reverse();
 return (
  <>
   {Object.keys(data).length !== 0 && (
    <section
     class=" our-services sec-padding-4 section-light animate-in"
     data-anim-type="fade-in-right"
     data-anim-delay="400"
    >
     <div class="container">
      <div class="row">
       <div class="col-sm-12">
        <div class="sec-title-container text-center">
         <h2 class="font-weight-6 less-mar-1 line-height-5">
          {data[0].fields.MainTitle}
         </h2>
         <div class="ce-title-line"></div>
        </div>
       </div>
       <div class="clearfix"></div>
      </div>
      <div class="row">
       <div class="col-md-12 col-sm-12 col-xs-12 margin-bottom">
        <div class="clearfix"></div>
        <div class="tab-content-style-15">
         <div class="responsive-tabs-content">
          {data.map((e, i) => {
           if ((i + 1) % 2 == 0) {
            return (
             <>
              <Content data={e.fields} />
              <Images data={e.fields} />
              {i + 1 !== data.length && (
               <>
                <div class="clearfix"></div>
                <br />
                <div className="divider-line solid light-2" />
               </>
              )}
             </>
            );
           } else {
            return (
             <>
              <Images data={e.fields} />
              <Content data={e.fields} />
              {i + 1 !== data.length && (
               <>
                <div class="clearfix"></div>
                <br />
                <div className="divider-line solid light-2" />
               </>
              )}
             </>
            );
           }
          })}
         </div>
        </div>
       </div>
      </div>
     </div>
    </section>
   )}
  </>
 );
};
