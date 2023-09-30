import { useState } from "react";
import Input from "./input";

export default function Comments({ depth, name, comment }: { depth: number, name?: string, comment?: string }) {
  // use depth to determine indentation and whether can have replies
  // shows name, content, and reply button that makes input component show up when clicked
  const [showInput, setShowInput] = useState(false);
  const [comments, setComments] = useState<{ [id: number]: {name: string, comment: string} }>({});
  const [commentID, setCommentID] = useState(0);
  if (depth === -1) {
    return (
      <>
        <Input newPost onSubmit={(n: string, c:string) => {
          setComments(() => ({
            ...comments,
            [commentID]: {name: n, comment: c}
          }));
          setCommentID(commentID + 1);
        }}/>
        <div>
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
    <>
      <div>{name}</div>
      <div>{comment}</div>
      {/* dont allow replying past depth 2 */}
      { (depth < 3) && <input type='button' value='Reply' onClick={() => {setShowInput(!showInput)}}/> }
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
    </>
  );
}