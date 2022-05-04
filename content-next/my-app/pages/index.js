import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { client } from "../components/client";
import { Index } from "../components/main";
import { Ourcustomer } from "../components/ourcustomer";
import { Companyreview } from "../components/companyReview";
import { Ourservices } from "../components/ourservices";
import { Ourpartners } from "../components/ourpartners";
import { Certified } from "../components/certified";
import { Footer } from "../components/footer";
import { Innews } from "../components/InNews";

export default function Home(props) {
 return (
  <>
   <Index nav={props.header} herobanner={props.heroBanner} />
   <Ourcustomer data={props.carousel.items} />
   <Companyreview data={props.blogType2} />
   <Ourservices datas={props.blogType1} />
   <Ourpartners data={props.carousel.items} />
   <Certified data={props.blogType2} />
   <Innews data={props.carousel.items} />
   <Footer datas={props.footer} />
  </>
 );
}

export const getStaticProps = async () => {
 const [header, heroBanner, carousel, blogType2, blogType1, footer] =
  await Promise.all([
   client.getEntries({ content_type: "header" }),
   client.getEntries({ content_type: "heroBanner" }),
   client.getEntries({ content_type: "carousel" }),
   client.getEntries({ content_type: "blogType2" }),
   client.getEntries({ content_type: "blogType1" }),
   client.getEntries({ content_type: "footer" }),
  ]);

 return {
  props: {
   header: header.items[0].fields,
   heroBanner: heroBanner.items[0].fields,
   carousel: carousel,
   blogType2: blogType2.items,
   blogType1: blogType1.items,
   footer: footer.items,
  },
 };
};
