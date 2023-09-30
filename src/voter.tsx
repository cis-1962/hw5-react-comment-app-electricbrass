import { useState } from "react";

// upvote/downvote component
export default function Voter() {
  const [voteCount, setVoteCount] = useState(0);
  return (
    <>
      <input type='button' value='up'
      onClick={() => setVoteCount(voteCount + 1)}/>
      {voteCount}
      <input type='button' value='down'
      onClick={() => setVoteCount(voteCount - 1)}/>
    </>
  );
}