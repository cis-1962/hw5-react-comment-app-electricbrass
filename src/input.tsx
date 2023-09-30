import { useState } from "react";

export default function Input({ newPost, onSubmit }: 
  { newPost: boolean, onSubmit: (name: string, comment: string) => void })  {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  // use css style to make text boxes be different sizes and aligned vertically
  return (
  <>
    <div>
      {newPost && <h1> New Post </h1>}
      {newPost || <h3> Reply </h3>}
    </div>
    <input
      type='text'
      placeholder='Name...'
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    <input
      type='text'
      placeholder={ newPost ? 'Type comment here...' : 'Type reply here...'}
      value={comment}
      onChange={(e) => setComment(e.target.value)}
    />
    <input
      type='button'
      value='Post'
      onClick={() => {
        if (name === '' || comment === '') {
          return;
        }
        onSubmit(name, comment);
        setName('');
        setComment('');
      }}
    />
  </>
  );
};