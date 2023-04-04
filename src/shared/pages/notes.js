import React from 'react'
import { useState, useEffect } from 'react';
import { storage } from "../../firebase"
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage"
import { v4 } from "uuid";

function Notes() {
    const [file, upload] = useState(null);
    const [filelist, setfilelist] = useState(null)
    const uploadFile = () => {
        if (file == null) return;
        const imageref = ref(storage, `waiting/${file.name + v4()}`)
        uploadBytes(imageref, file).then(() => {
            alert("file sent")
        })
    }



    return (
        <div>
            <div className='search-notes-box'>
                <h1>Search Files</h1>
                <li>Search using the particular name of the notes files you need , "BRANCH-SUBJECTCODE" , example IT-CS3001</li>
                <input type="text"></input>
                <button type='submit' >submit</button>
            </div>
            <div className='upload-files-box'>
                <h1>upload files</h1>
                <ul>
                    <li>state the name </li>
                    <li>state the name </li>
                    <li>state the name </li>
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