import Head from 'next/head';
import {BookSlider, HeadSlider,Banner} from "../components";
import {useEffect, useState} from "react";
import {useService,useUrl} from "./../hooks";
import {fileUrl} from "./../config.json";
export default function Home() {
    const service=useService();
    const url=useUrl();
    const [culturalSlider,setCulturalSlider]=useState([]);
    const [artisticSlider,setArtisticSlider]=useState([]);
    const [humorousSlider,setHumorousSlider]=useState([]);
    const [bannerList,setBannerList]=useState([]);
    useEffect(()=>{
        service("get","books",{page:1,pagination:true,"categories.title":"فرهنگی","_order[createdAt]":"asc"}).then(data=>{
            let cash=data["hydra:member"].map(item=>({name:item.name,image:`${fileUrl}${item.image.url}`,link:`/books/${item.id}`}));
            setCulturalSlider(cash);
        });
        service("get","books",{page:1,pagination:true,"categories.title":"هنری","_order[createdAt]":"asc"}).then(data=>{
            let cash=data["hydra:member"].map(item=>({name:item.name,image:`${fileUrl}${item.image.url}`,link:`/books/${item.id}`}));
            setArtisticSlider(cash);
        });
        service("get","books",{page:1,pagination:true,"categories.title":"طنز","_order[createdAt]":"asc"}).then(data=>{
            let cash=data["hydra:member"].map(item=>({name:item.name,image:`${fileUrl}${item.image.url}`,link:`/books/${item.id}`}));
            setHumorousSlider(cash);
        });
        service("get","banners",{}).then(data=>{
            let cash=data["hydra:member"].map(item=>({link:item.targetLink,image:`http://sanab.erbp.ir/public/files/${item.file.title}`}));
            setBannerList(cash);
        })
    },[]);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
          {/*<MultiSelect type={"radio"} onChange={(e)=>{debugger}} name={"peyman"}*/}
          {/*             item={[*/}
          {/*                 {value:1,label:"شماره یک"},*/}
          {/*                  {value:2,label:"شماره دو"}*/}
          {/*             ]}*/}
          {/*/>*/}
        <HeadSlider items={[
        {
            name:"هر گوشی هوشمند یک کتابخانه",
            image:"/assets/temp/Untitled-1.jpg",
            caption:<div dir="rtl"><h4>همین حالا برنامه سناب  را  برای گوشی خود دریافت کنید</h4><button className="btn">دریافت برنامه</button></div>
        },
        {
            name:"کمپین هر هفته یک کتاب",
            image:"/assets/temp/Untitled-2.jpg",
            caption:<div><button className="btn white">شرکت در کمپین</button></div>
        },
        ]}/>
          <BookSlider
              title={"تازه های فرهنگی"}
              items={culturalSlider}
          />
          {
              bannerList.length > 0 &&
              <Banner link={bannerList[0].link} image={bannerList[0].image}/>
          }
          <BookSlider
              title={"تازه های هنری"}
                items={artisticSlider}
          />
          {
              bannerList.length > 1 &&
              <Banner link={bannerList[0].link} image={bannerList[0].image}/>
          }
          <BookSlider
              title={"تازه های طنز"}
                items={humorousSlider}
          />
      </section>
    </div>
  )
}
