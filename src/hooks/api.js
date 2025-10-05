import { useEffect,useState } from "react"
import axios from "axios"



export function ApiHandler(currency){
    const [data,setdata] = useState({})

    useEffect(()=>{
        const Api_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        axios
        .get(Api_URL)
        .then((res) =>{
            setdata(res.data[currency])
        })
        .catch((err)=>{
            console.log("error",err)
        })
    },[currency])
    return data
}


    // export const CurrencyNamesAPI = ()=>{
//     const [Data,setData] = useState({})

//     useEffect(()=>{
//         const Api_URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.min.json`
//         axios
//         .get(Api_URL)
//         .then((res) =>{
//             setData(res.data)
//         })
//         .catch((err)=>{
//             console.log("error",err)
//         })
//     },[])
//     return Data
// }

