import Comments from './comments'

export default function App() {
  return (
    <main>
      <div style={{
        backgroundColor: 'blueviolet',
        height: '8vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // fontFamily: 'Arial, sans-serif',
        fontSize: '6vh'
      }}>
        Comments App
      </div>
      <Comments depth={-1}/>
    </main>
  );
}
