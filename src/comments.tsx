export default function Comments({ depth, name, comment }: { depth: number, name: string, comment: string }) {
  // use depth to determine indentation and whether can have replies
  // shows name, content, and reply button that makes input component show up when clicked
  return (
    <>
      <div>{name}</div>
      <div>{comment}</div>
      <input type='button' value='Reply'/>
    </>
  );
}