import {useState,useEffect} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import {useService} from "../../hooks";
import {BookSlider} from "../../components";
const Publisher=(props)=>{
    const router=useRouter();
    const {query}=router;
    const service=useService();
    const [publisherInfo,setPublisherInfo]=useState(null);
    const [booklist,setBookList]=useState([]);
    useEffect(()=>{
        if(query.param){
            service("get","publishers",{id:query.param}).then(data=>{
                setPublisherInfo(data);
                service("get","books",{"publishers.name":data.name}).then(data=>{
                    let booksCash=data["hydra:member"].map(item=>({name:item.name,image:`http://sanab.erbp.ir/public/files//${item.image.url}`,link:`/books/${item.id}`}));
                    setBookList(booksCash);
                })
            })

        }
    },[query.param])
    return(<div className={"layout publisherDetails"}>
        {publisherInfo ?

            <div className={"row"}>
                <div className={"col m_20"}>
                    <div className={"img"} style={{backgroundImage:`url(http://sanab.erbp.ir/public/files/${publisherInfo.picture && publisherInfo.picture.url})`}} alt={publisherInfo.name} />

                </div>
                <div className={"col m_80 content"}>
                    <b> {publisherInfo.name}</b>
                    <div>{publisherInfo.description}</div>
                    <div className={"details"}>
                        <div><strong>تارنما:</strong> {publisherInfo.siteUrl}</div>
                        <div><strong>آدرس:</strong> {publisherInfo.address}</div>
                        <div><strong>رایانامه:</strong> {publisherInfo.email}</div>
                        <div><strong>شماره تماس:</strong> {publisherInfo.phoneNumber}</div>
                        <div><strong>سال تاسیس:</strong> {publisherInfo.year}</div>
                    </div>

                </div>
            </div>

            :
            <div>در حال بارگذاری ...</div>
        }
        {
            booklist ?
                <div style={{height:"270px",overflow:"hidden",marginTop:"30px"}}>
                    {
                        booklist.length>0 &&
                        <BookSlider
                            id={1}
                            title={"کتاب هایی از همین ناشر"}
                            items={booklist}
                        />
                    }
                </div>
                :
                <div>در حال بارگذاری ...</div>

        }


    </div>)
}
export default Publisher;