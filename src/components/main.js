import EmojiList from "../emojiList"
import EmojiContainer from "./emojiContainer"
import {useState,useEffect} from "react"
import Nav from "./nav"

const Main = () =>{
    const[list,setList] = useState(EmojiList);
    const[keyword,setKeyword] = useState("");
    const typed = (e) => {
        const value = e.target.value;
        setKeyword(value);
    }
    useEffect(_ => {
        const filterList = EmojiList.filter(SingleEmoji => {
            if(SingleEmoji.description.startsWith(keyword))
               return true;
            if(SingleEmoji.category.startsWith(keyword))
               return true;
            if(SingleEmoji.aliases.some(e => e.startsWith(keyword)))
               return true;
            if(SingleEmoji.emoji == keyword)
               return true;
             return false;
        });
        setList(filterList);
    },[keyword])


   return(
     <main className="outer-container">
         
         <header >
          <Nav/>
          <div className="search-input">
           <input type="text" onKeyUp={typed} placeholder="Find emojis by name or description   🔎"></input>
           { keyword ==""? false :(<h3>Result for {keyword}</h3>)}
           <img src="https://cdn-icons-png.flaticon.com/128/1148/1148842.png" alt="Navigate indication"/>
          </div>
          <hr/>
         </header>
     
        

         
         {list.length === 0 ? ( <h3 className="no-result"> No Results found ☹ </h3> ) : (<EmojiContainer list={list}/>)}
         
     </main>
   )
}

export default Main