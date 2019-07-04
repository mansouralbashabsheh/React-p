import React ,{useState ,useEffect} from 'react'
import axios from 'axios'
import {Image} from './style.js'

const Header = () =>{
    const [images,setImages] = useState( [] )

    useEffect(() => {
axios.get('js/data.json').then((res)=>{ setImages(res.data.animals)})

       
    }, [])

    const allImages = images.map( (image)=>{return(
        <div key={image.id}>
            <span> {image.name}</span>
            <Image src={image.photo} />

        </div>
    )} )
    return(
        <div>
           {allImages}
        </div>
    )
}




export default Header;