import {useEffect,useState} from "react";
import {BookInformation, BookSlider, Comments} from "../../components";
import {useRouter} from "next/router";
import {useService} from "../../hooks"
import {Positions} from "../../models/eums";
import moment from "moment-jalaali";
const Books=(props)=>{
    const router=useRouter();
    const {query}=router;
    const service=useService();
    const [bookInfo,setBookInfo]=useState(null);
    const [author,setAuthor]=useState(null);
    const [translator,setTranslator]=useState(null);
    const [publisherBooks,setPublisherBooks]=useState(null);
    const [categoryBooks,setCategoryBooks]=useState(null);
    useEffect(() => {
        debugger;
        if(query.param){
            service("get","books",{id:query.param}).then(data=>{
                setBookInfo(data);
                let cashAuthor=data.positions.find(item=>item.type===Positions.WRITER);
                if(cashAuthor){
                    setAuthor(`${cashAuthor.person.firstName} ${cashAuthor.person.lastName}`);
                }
                let cashTranslator=data.positions.find(item=>item.type===Positions.TRANSLATOR);
                if(cashTranslator){
                    setTranslator(`${cashTranslator.person.firstName} ${cashTranslator.person.lastName}`);
                }
                let publisherName=data.publishers.length && data.publishers[0].name
                service("get","books",{"publishers.name":publisherName},false).then(data=>{
                    debugger;
                    let cashPublisher=data["hydra:member"].filter(item=>item.id!==query.param);
                    let cashPublisherSlider=cashPublisher.map(item=>({name:item.name,image:`http://sanab.erbp.ir/public/files//${item.image.url}`,link:`/books/${item.id}`}))
                    setPublisherBooks(cashPublisherSlider);
                })
                let categoryName=data.categories[0].title;
                service("get","books",{"categories.title":categoryName},false).then(data=>{
                    let cashCategory=data["hydra:member"].filter(item=>item.id!==query.param);
                    let cashCategorySlider=cashCategory.map(item=>({name:item.name,image:`http://sanab.erbp.ir/public/files//${item.image.url}`,link:`/books/${item.id}`}))
                    setCategoryBooks(cashCategorySlider);
                })
            })
        }

    }, [query.param]);

    return(<div>
        {bookInfo ?
            <BookInformation
                name={bookInfo.name}
                image={`http://sanab.erbp.ir/public/files//${bookInfo.image.url}`}
                author={author}
                translator={translator}
                nariator={null}
                publisher={bookInfo.publishers.length && bookInfo.publishers[0].name}
                language={bookInfo.language}
                page={bookInfo.pageNumber}
                ISBN={bookInfo.ISSN}
                date={moment(bookInfo.createdAt,"YYYY/MM/DD").format("jYYYY/jMM/jDD")}
                description={bookInfo.description}
                audio={bookInfo.audio.length && `http://sanab.erbp.ir/public/files//${bookInfo.audio[0].title}`}
                file={bookInfo.files.length && bookInfo.files[0]}
            />
        :
            <div>در حال بارگذاری ...</div>
        }

        <Comments/>
        <div style={{height:"270px",overflow:"hidden"}}>
            {publisherBooks?
                publisherBooks.length>0 &&
                <BookSlider
                    id={1}
                    title={"کتاب هایی از همین ناشر"}
                    items={publisherBooks}
                />
                :
                <div>در حال بارگذاری ...</div>
            }
        </div>
    <div style={{height:"270px",overflow:"hidden"}}>
        {categoryBooks?
            categoryBooks.length>0 &&
            <BookSlider
                id={2}
                title={"کتاب هایی از همین موضوع"}
                items={categoryBooks}
            />
            :
            <div>در حال بارگذاری ...</div>
        }
    </div>

        {/*<BookSlider*/}
        {/*    title={"جدیدترین کتاب ها"}*/}
        {/*    items={[*/}
        {/*        {*/}
        {/*            name:"مغازه خودکشی",*/}
        {/*            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",*/}
        {/*            link:"/"*/}
        {/*        },*/}
        {/*        {*/}
        {/*            name:"مغازه خودکشی",*/}
        {/*            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",*/}
        {/*            link:"/"*/}
        {/*        },*/}
        {/*        {*/}
        {/*            name:"مغازه خودکشی",*/}
        {/*            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",*/}
        {/*            link:"/"*/}
        {/*        },*/}
        {/*        {*/}
        {/*            name:"مغازه خودکشی",*/}
        {/*            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",*/}
        {/*            link:"/"*/}
        {/*        },*/}
        {/*        {*/}
        {/*            name:"مغازه خودکشی",*/}
        {/*            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",*/}
        {/*            link:"/"*/}
        {/*        },*/}
        {/*        {*/}
        {/*            name:"مغازه خودکشی",*/}
        {/*            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",*/}
        {/*            link:"/"*/}
        {/*        },*/}
        {/*    ]}*/}
        {/*/>*/}
    </div>)
}
export default Books;