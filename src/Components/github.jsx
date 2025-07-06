import { useState } from "react"
import { GitHubList } from "./list";




export const GitHubCard = () =>{

    const [github , setGihub] = useState(null);
    const [username ,setUsername] = useState("");
                
            function generateGithubDetails (){
            fetch(`https://api.github.com/users/${username }`,{
                method : "GET"
            })
            .then( async function(res){
                const json = await res.json();
               console.log(json)
               setGihub(json)
            })
        }
       
        
      

    return(
        <div className="Card">
            <h1>Github Profile</h1>
            <input type="text" placeholder="Enter your github username"
               onChange={function(e){
                setUsername(e.target.value);
               }} >
            </input>
            <button className="btn" onClick={generateGithubDetails}>get details</button>

            {github ? (
            <GitHubList name = {github.name} public_repos = {github.public_repos} />)
            : <p> </p>}
        

            <div>
               
            </div>
        </div>
    )
}