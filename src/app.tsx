import Input from './input'
import Comments from './comments'

export default function App() {
  return (
  <main>
    Comments App
    <Input newPost onSubmit={(name: string, comment:string) => {}}/>
    <div>
      <h2>
        Posts:
      </h2>
      <Comments depth={0} name='Mia' comment="I'm gay"/>
    </div>
  </main>
    );
}
