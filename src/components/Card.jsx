import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { motion } from 'framer-motion';

function Card({data,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.2}} dragElastic={0.2} dragTransition={{ bounceStiffness: 600, bounceDamping: 5 }} className='relative w-60 h-72 py-10 px-8 overflow-hidden rounded-[45px]  bg-zinc-900/90 text-white p-5 '>
        <FaRegFileAlt />
        <p className='text-sm leading-tight mt-5 font-semibold '>{data.description}</p>
        <div className="footer  absolute bottom-0   w-full left-0">
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.filesize}</h5>
                <div className='w-9 h-9 bg-purple-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoIosCloseCircle  size="1.5em" /> : <FaCloudDownloadAlt  color='white' size="1.5em" />}
                </div>
            </div>

            {data.tag.isOpen && (
                <div className={`tag w-full py-4 flex items-center  justify-center ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"}`}>
                 <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
             </div>)}
             
        </div>
    </motion.div>
  )
}

export default Card