import React from "react";
import { useState, useEffect } from "react";

function GetImages() {
    const [images, setImages] = useState([])
    useEffect(() => {
        const fetchImages = async() => {
            await fetch("https://www.fb.com/macbrill13")
            .then((res)=>{console.log(res);})
            .catch((error)=>{console.log(error);})
        }

        fetchImages();
    }, [])

    return (
        <div>
            <h1>hello images are fetched here</h1>
        </div>
    )
}

export default GetImages;