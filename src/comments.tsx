import { useState } from "react";
import Input from "./input";
import Voter from "./voter";

export default function Comments({ depth, name, comment }: { depth: number, name?: string, comment?: string }) {
  // use depth to determine indentation and whether can have replies
  // shows name, content, and reply button that makes input component show up when clicked
  const [showInput, setShowInput] = useState(false);
  const [comments, setComments] = useState<{ [id: number]: {name: string, comment: string} }>({});
  const [commentID, setCommentID] = useState(0);
  if (depth <= -1) {
    return (
      <>
        <div style={{
          boxShadow: 'black 0px 0px 5px', 
          width: 'fit-content', 
          position: 'relative', 
          left: '10px', 
          top: '10px', 
          padding: '10px'
        }}>
          <Input newPost onSubmit={(n: string, c:string) => {
            setComments(() => ({
              ...comments,
              [commentID]: {name: n, comment: c}
            }));
            setCommentID(commentID + 1);
          }}/>
        </div>
        <div style={{
          position: 'relative', 
          left: '10px', 
          top: '20px'
        }}>
          <h2>
            Posts:
          </h2>
          {Object.entries(comments).map(([k, v]) => (
            <Comments depth={depth + 1} name={v.name} comment={v.comment} key={k}/>
          ))}
        </div>
      </>
    );
  }
  return (
    <div style={{
      position: 'relative', 
      top: '10px',
      left: depth !== 0 ? '10px' : '',
      padding: '10px',
      boxShadow: depth === 0 ? 'black 0px 0px 5px' : '', 
      minWidth: 'fit-content',
      width: '10vw',
      marginBottom: '15px'
    }}>
      <div style={{
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        minWidth: 'fit-content',
        width: '10vw'
      }}>
        <div>
          <div style={{fontWeight: 'bold'}}>{name}</div>
          <div style={{marginBottom: '10px'}}>{comment}</div>
          {/* dont allow replying past depth 2 */}
          { (depth < 2) && <input type='button' value='Reply' onClick={() => {setShowInput(!showInput)}}/> }
        </div>
        <Voter/>
      </div>
      {/* add new comments to state */}
      { showInput && <Input newPost={false} op={name} onSubmit={(n: string, c: string) => {
        // setComments(() => {
        //   comments[commentID] = {name: n, comment: c};
        //   return comments;
        // });
        setComments(() => ({
          ...comments,
          [commentID]: {name: n, comment: c}
        }));
        setCommentID(commentID + 1);
        setShowInput(false);
      }}/> }
      {/* display replies */}
      {Object.entries(comments).map(([k, v]) => (
        <Comments depth={depth + 1} name={v.name} comment={v.comment} key={k}/>
      ))}
    </div>
  );
}