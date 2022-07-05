import { Trash, ThumbsUp } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment(){
  return (
    <div className={styles.comment}>
      <img src="https://github.com/henriquekramer.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrique Kramer</strong>
              <time title="04 de Julho às 17:41h" dateTime="2022-07-04 17:41">Cerca de 1h atrás</time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>

        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>

      </div>

    </div>
  )
}