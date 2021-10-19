import dynamic from "next/dynamic";
import {useRouter} from "next/router";
import {Epub} from "../../components"
const PDFViewer=dynamic(()=>import("../../components/pdf/pdf"),{
    ssr:false
});
const Index=()=>{
    const router=useRouter();
    debugger;
    const {query}=router;
    debugger;
    return(
        <div className={"pageView"}>
        {
        (query && query.extension==="pdf")?
            <PDFViewer url={`http://sanab.erbp.ir/public/files/${query.file}`}/>
            :
            <Epub url={`http://sanab.erbp.ir/public/files/${query.file}`}/>
        }
        <div className={"title"}>{query.name}</div>


    </div>)
}
export default Index;