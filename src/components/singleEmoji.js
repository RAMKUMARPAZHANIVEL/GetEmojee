import { useEffect } from 'react';
import {useState} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';
const SingleEmoji = ({singleEmoji}) =>{
   const[iscopied,setCopy] = useState(false);
  useEffect(_ => {
   if(iscopied){
      setTimeout(()=>{
           setCopy(false);
        }, 3000);
     }
  },[iscopied])

    return(
   <CopyToClipboard text={singleEmoji.emoji} onCopy={_ => setCopy(true)}>
      <div className={`single-emoji-container ${iscopied ?'copy-succeed' : "" }`}>
       <div className='emoji-box'>
       <p className="emoji"> {iscopied ? "✔": singleEmoji.emoji }</p>
       </div>
       <p>{singleEmoji.description}</p>
      </div>
   </CopyToClipboard>
         
  
    )
 }
 
 export default SingleEmoji