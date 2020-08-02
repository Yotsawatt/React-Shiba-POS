import React, {useState, useEffect} from 'react'
import Axios from 'axios'


export default function Mainpos() {

    const [item, setItem] = useState([])
    const [allselect, setAllselect] = useState([])
    
    useEffect(() => {
        const fetchItem = async () => {
            const result = await Axios.get(`https://api.jsonbin.io/b/5e69b564d2622e7011565547?fbclid=IwAR1k4-q8kdVUvRncqd2TYzHQT3SFVHvHYhWZate_GLeEr0BwB84Go6kjq5w`)
            // console.log(result.data)
            setItem(result.data)
          }
      
          fetchItem()

    }, [])
    
    const book = item.books

    const addselect = (item) => {
        console.log('item',item)
        // const findarray = allselect && allselect.find(e => e == item)
        // if(findarray == item){
        //     console.log('is already')
        // }
        // else{
        //     setAllselect([...allselect,item]) 
        // }
        setAllselect([...allselect,item])
    }


    console.log('allselect',allselect)


    return (
        <div className="mainpos-container">
            <div className="leftside-container">
                <h1>Left side</h1>
                {
                    allselect && allselect.map((item,index) => {

                        if(item.title){
                            return (
                                <div key={index}>
                                    <h1>{item.title}</h1>
                                </div>
                            )
                        }
                        else {
                            return(
                                <div>
                                    <h1>is already</h1>
                                </div>
                            )
                        }
                    })
                }

            </div>
            <div className="rightside-container">
                <h1>Right side</h1>
                {
                book && book.map((item,index) => (
                    <div key={index} >
                        <h1>{item.title}</h1>
                        <button onClick={() => addselect(item)}>{item.id}</button>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

