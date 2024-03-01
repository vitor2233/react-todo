import styles from './App.module.css'
import { Header } from './Components/Header'
import { Tasks } from './Components/Tasks'
import './global.css'


function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <Tasks />
        </main>
      </div>
    </div>
  )
}

export default App
