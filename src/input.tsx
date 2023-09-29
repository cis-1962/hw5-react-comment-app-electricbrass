export default function Input({ newPost }: { newPost: boolean })  {
    return (
    <>
    <div>
        {newPost && <h1> New Post </h1>}
        {newPost || <h1> Reply </h1>}
    </div>
    <input type='text' placeholder='Name...'/>
    <input type='text' placeholder={ newPost ? 'Type comment here...' : 'Type reply here...'}/>
    <input type='button' value='Post'/>
    </>
    );
};