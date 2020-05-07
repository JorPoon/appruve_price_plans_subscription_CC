import axios from 'axios'
import React ,{useState, useEffect} from 'react'


const SubscriptionCard = ({title}) => {
    const [data, setData] = useState({plan: {}})
    
    useEffect(() => {
        async function fetchAPI() {
            const response = await axios(`www.api.com$/${title}`)
            setData(response.data)
          }
          fetchAPI()
    },[])


    return (
        <div>
            <h1>{data.plan.data}</h1>
            <p>{data.plan.content}</p>
            <p>{data.plan.pricing}</p>
            <p>Need to style and have data on this page</p>
        </div>
    )

}

export default SubscriptionCard