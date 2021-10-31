import {useEffect,useState} from "react";
import {useRouter} from "next/router";
import {BookList,Pagination,Filter} from "../../components";
import {useService,useUrl} from "../../hooks";
import querystring from "query-string";
import {fileUrl} from "./../../config.json";
//enums
import {Language} from "../../models/eums";
const List=(props)=>{
    const router=useRouter();
    const service=useService();
    const url=useUrl("/books/list");
    const [list,setList]=useState(null);
    const [countData,setCountData]=useState(0);
    const {query} =router;

    const handlePage=(page)=>{
        let queryString={...query,page};
        url(queryString);
    }
    const handleFilter=(param)=>{
        let queryJSON=querystring.parse(location.search,{arrayFormat: 'bracket-separator', arrayFormatSeparator: '|'});
        url({...queryJSON,...param,page:1,pagination:true});
    }
    const loadData=(query)=>{
        service("get","books",query).then(data=>{
            let cashBookList=data["hydra:member"].map(item=>({name:item.name,image:`${fileUrl}${item.image.url}`,link:`/books/${item.id}`}))
            setList(cashBookList);
            setCountData(data["hydra:totalItems"]);
        });
    }
    useEffect(() => {
        loadData(query);
    }, [query]);
    return(
        <div className={"layout"}>
            <div className={"row"}>
                <div className={"col m_20"}>
                    <Filter
                        onChange={handleFilter}
                        inputs={[
                            {type:"textbox",name:"name",label:"عنوان کتاب"},
                            {type:"multiCheck",name:"language",title:"زبان آثار",
                                item:[
                                    {label:"فارسی",value:Language.farsi,},
                                    {label:"انگلیسی",value:Language.english,},
                                    {label:"عربی",value:Language.arabic,},
                                ]
                            }
                        ]}/>
                </div>
                <div className={"col m_80"}>
                    {
                        query && list ?
                        <>
                        <BookList data={list}/>
                        <div className={"col"}>
                        <Pagination currentPage={query && query.page} onChange={handlePage}  dataCount={countData} dataPerPage={20}/>
                        </div>
                        </>
                        :
                        <div>در حال بارگذاری ...</div>
                    }

                </div>
            </div>

        </div>)
}
export default List;