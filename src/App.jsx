import { Post } from './components/Post'
import { Header } from './components/Header' 
import { Sidebar } from './components/Sidebar' 


import './global.css'
import styles from './App.module.css'


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        
        <main>
          <Post 
            author="Henrique Kramer"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit, quisquam."
          />
          <Post 
            author="Henrique Kramer"
            content="Um novo texto.."
          />
        </main>

      </div>

    </div>
  )
}

