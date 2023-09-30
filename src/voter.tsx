import { useState } from "react";

// upvote/downvote component
export default function Voter() {
  const [voteCount, setVoteCount] = useState(0);
  const buttonStyle = {
    cursor: 'pointer',
    background: '0',
    fontWeight: 'bold',
    fontSize: '20px',
    padding: '0',
    margin: '0',
    border: 'none'
  };
  return (
    <div style={{alignItems: 'center'}}>
      <input type='button' value='⌃'
      onClick={() => setVoteCount(voteCount + 1)}
      style={buttonStyle}/>
      <div>{voteCount}</div>
      <input type='button' value='⌄'
      onClick={() => setVoteCount(voteCount - 1)}
      style={buttonStyle}/>
    </div>
  );
}