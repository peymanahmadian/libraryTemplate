import dynamic from "next/dynamic";
import {Epub} from "../../components"
const PDFViewer=dynamic(()=>import("../../components/pdf/pdf"),{
    ssr:false
});
const Index=()=>{
    return(<div>
        <Epub url={"/assets/temp/alices.epub"}/>
        {/*<PDFViewer url={"http://sanab.erbp.ir/public/files/6163c8e4cf288327039214.pdf"}/>*/}
    </div>)
}
export default Index;