import SingleEmoji from "./singleEmoji"
const EmojiContainer= ({list}) =>{
    return(
   <div className="list_container">
      {list.map((singleEmoji,idx)=>{
        return(
            <SingleEmoji  key= {idx} singleEmoji={singleEmoji}/>
        )
     })}
   </div>
    )
 }
 
 export default EmojiContainer