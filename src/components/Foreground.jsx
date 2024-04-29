import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null);


    const data = [
        { 
            description : 'Microsoft Word macro-enabled document',
            filesize: "9MB",
            close : true,
            tag : {isOpen : true,
            tagTitle : "Download Now",
            tagColor : "green"}

        },
        { 
            description : 'Microsoft Word document',
            filesize: "12MB",
            close : false,
            tag : {isOpen : true,
            tagTitle : "Download Now",
            tagColor : "blue"}

        },
        { 
            description : 'Microsoft Word template before Word 2007',
            filesize: "7MB",
            close : true,
            tag : {isOpen : true,
            tagTitle : "Download Now",
            tagColor : "green"}

        },
        { 
            description : 'Microsoft Access runtime database',
            filesize: "15MB",
            close : true,
            tag : {isOpen : true,
            tagTitle : "Download Now",
            tagColor : "blue"}
        },
        { 
            description : 'Spreadsheet data interchange format file',
            filesize: "2MB",
            close : true,
            tag : {isOpen : true,
            tagTitle : "Upload Data",
            tagColor : "blue"}
        },
        { 
            description : 'Email file created by Outlook Express, Windows Live Mail, and other programs',
            filesize: "9MB",
            close : false,
            tag : {isOpen : true,
            tagTitle : "Download Now",
            tagColor : "Green"}
        },
    ]
  return (
    <div ref={ref} className='fixed flex gap-5 flex-wrap p-9  left-0 top-0 z-[3] h-full w-full  '>
       {data.map((item, index) =>  (
        <Card data={item} reference={ref} />
        ))}

    </div>
  )
}

export default Foreground