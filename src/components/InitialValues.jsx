import { useState } from "react";

export default function InitialValues({postsTable}){
    const [postData, setPostData] = useState([]);
    {postData?.map((postsTable, key) =>{
    return (
    <ul>
       <li key={postsTable.id}> id: {postsTable.post} </li>
       <li> day: {postsTable.day} </li>
        <li> month: {postsTable.month} </li>
        <li> content: {postsTable.content} </li>
        <li> checkbox: {postsTable.checkbox} </li>
    </ul>
    )})}
}
/*  {postData?.map((postsTable, key) => {
        return (
          <C.tr key={postsTable.id}>
            <C.th id="number" variant="day" scope="column">
              {" "}
              Day posted: {postsTable.day}
            </C.th>

            <C.th id="number" scope="column">
              Month posted: {postsTable.month}
            </C.th>

            <C.th scope="column"> Post title: {postsTable.post}</C.th>

            <C.th scope="column"> What was written:{postsTable.content}</C.th>

          </C.tr>
        );
    })} */