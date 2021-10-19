import { useState } from "react";
import styles from "./pdf.module.scss";
import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "../../pdf-worker";
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;
export default function PDFViewer(props) {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const  onDocumentLoadSuccess=({ numPages: nextNumPages })=> {
        setNumPages(nextNumPages);
    }

    return (
            <div className={styles.pdfContainer}>
                <Document file={props.url} onLoadSuccess={onDocumentLoadSuccess}>
                        <Page
                            pageNumber={pageNumber}
                        />
                </Document>
                <div className={styles.pageContainer}>
                    <p>صفحه {pageNumber} از {numPages}</p>
                    <button type={"button"} disabled={pageNumber===1} onClick={()=>setPageNumber(pageNumber-1)}>صفحه قبلی</button>
                    <button type={"button"} disabled={pageNumber===numPages} onClick={()=>setPageNumber(pageNumber+1)}>صفحه بعدی</button>
                    <input placeholder={"شماره صفحه"}  onKeyDown={e=>{e.keyCode===13&&setPageNumber(parseInt(e.target.value))}} />

                </div>

            </div>
    );
}
