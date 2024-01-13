import { createContext, useEffect, useState } from "react";



export const ApiContext = createContext()

const ApiProvider = ({children}) => {
const [pics, setPics] = useState([]);
const [loading, setLoading] = useState(false)

const getPics = async () => {
    try {
        setLoading(true)
        const res = await fetch('../../public/photos.json');
        const data = await res.json()
        setPics(data.photos)
        setLoading(false)
    } catch (error) {
  console.log(error);     
    }

}

useEffect(() => {
  getPics()
}, [])



    return (
        <ApiContext.Provider value={{pics , loading}}>
            {children}
        </ApiContext.Provider>
    )
}

export default ApiProvider