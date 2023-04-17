import React from 'react'
import { useState, useEffect } from 'react';
import { storage } from "../../firebase"
import { ref, uploadBytes, listAll, getDownloadURL,   getMetadata , updateMetadata } from "firebase/storage"
import { v4 } from "uuid";
 
import Card from '../components/card'
import './notes.css'
function Notes() {
    const [file, upload] = useState(null);
    const [filelist, setfilelist] = useState([])
    const [urlList , seturlList] = useState([])
    var namefile = ''
    const uploadFile = () => {
        if (file == null) return;
        var metadata = {
            customMetaData : {
                'name' : {namefile}
            }
        };
        const imageref = ref(storage, `waiting/${file.name }`) 
        uploadBytes(imageref, file).then(() => {
            alert("file sent")
        })
        updateMetadata(imageref , metadata).then(() => {
            console.log(metadata)
        })
    }


    const listRef = ref(storage, 'waiting/')
    useEffect(() => {
        listAll(listRef).then((res) => {
            res.prefixes.forEach((folderRef) => {

            })
            res.items.forEach((itemRef) => {
                getDownloadURL(itemRef).then((url) => {
                    
                
                        getMetadata(itemRef).then((meta) => {
                            console.log(meta.name)
                           
                            setfilelist((prev) => [...prev , [meta.name + v4() , meta.name , url]])
                        })
                    })
               
                
            })
        }).catch((error) => {
            console.log(error)
        })
    } , [0])

    return (
        <div>
            <div className='search-notes-box'>
                <h1>Search Files</h1>
                <li>Search using the particular name of the notes files you need , "BRANCH-SUBJECTCODE" , example IT-CS3001</li>
                <input type="text"></input>
                 
                <button type='submit' >submit</button>
                <br></br>
                {
                    filelist.map((item) => {
                        return <Card key={item[0]} name={item[1]} ur={item[2]}/>
                    } )
                }
            </div>
            <div className='upload-files-box'>
                <h1>upload files</h1>
                <ul>
                    <li>Use a pdf format to upload the notes</li>
                    <li>Name the file in the format - "BRANCH-SUBJECTCODE"</li>
                   
                </ul>
                <input type="file" className='btn-st'
                    onChange={(event) => {
                        upload(event.target.files[0])
                    }} />
                    
                <button className='btn-st' onClick={uploadFile}>Upload notes files</button>
            </div>



        </div>
    )
}

export default Notes