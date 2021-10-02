import {useEffect,useState} from "react";
import {useRouter} from "next/router";
import {BookList,Pagination} from "../../components";
import {useService,useUrl} from "../../hooks";
const List=(props)=>{
    const router=useRouter();
    const service=useService();
    const url=useUrl("/books/list");
    const [list,setList]=useState(null);
    const [countData,setCountData]=useState(0);
    const {query} =router;
    const handlePage=(page)=>{
        debugger;
        let queryString={...query,page};
        url(queryString);
    }
    const loadData=(query)=>{
        service("get","books",query).then(data=>{
            let cashBookList=data["hydra:member"].map(item=>({name:item.name,image:`http://sanab.erbp.ir/public/files/${item.image.url}`,link:`/books/${item.id}`}))
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
                <div className={"col m_20"}>filter</div>
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