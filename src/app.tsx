import Comments from './comments'

export default function App() {
  return (
    <main>
      Comments App
      <Comments depth={-1} name='Mia' comment="I'm gay"/>
    </main>
  );
}
