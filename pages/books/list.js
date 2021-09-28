import {BookList,Pagination} from "../../components";
import ReactPaginate  from "react-paginate";
const List=(props)=>{
    return(
        <div className={"layout"}>
            <div className={"row"}>
                <div className={"col m_20"}>filter</div>
                <div className={"col m_80"}>
                    <BookList data={
                    [
                        {
                            name:"مغازه خودکشی",
                            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                            link:"/"
                        },
                        {
                            name:"مغازه خودکشی",
                            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                            link:"/"
                        },
                        {
                            name:"مغازه خودکشی",
                            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                            link:"/"
                        },
                        {
                            name:"مغازه خودکشی",
                            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                            link:"/"
                        },
                        {
                            name:"مغازه خودکشی",
                            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                            link:"/"
                        },
                        {
                            name:"مغازه خودکشی",
                            image:"http://sanab.erbp.ir/public/files/60fd2fcb544e1646123945.jpg",
                            link:"/"
                        },
                    ]
                    }/>
                    <div className={"col"}>
                        <Pagination onChange={e=>{debugger}}  dataCount={268} dataPerPage={20}/>
                    </div>
                </div>
            </div>

        </div>)
}
export default List;