import querystring from "query-string";
import {useRouter} from "next/router";
const useUrl=(url)=>{
    const router=useRouter();

    return (param)=>{
        let body=querystring.stringify(param, {
            skipNull: true,
            skipEmptyString: true,
            arrayFormat: "bracket",
        });
        router.push(`${url}?${body}`);
    }
}
export default useUrl;