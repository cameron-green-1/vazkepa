import React from 'react'
import styles from '../styles/buttonCard.module.scss'

export default function ButtonCard({ buttonText = 'null', buttonRefId = '0', frontText = 'front', backText = 'back' }) {

    function flipCard() {
        const flipCardElement = document.getElementById(`id${buttonRefId}`);
        flipCardElement.classList.toggle(styles.flip)

    }



    return (
        <div className={styles.body} >
            <button id={`id${buttonRefId}`} className={styles.flip__card} onClick={flipCard}>
                <div className={styles.flip__card__inner}>
                    <div className={styles.flip__card__front}>
                        {frontText}
                    </div>
                    <div className={styles.flip__card__back}>
                        {backText}
                    </div>
                </div>
            </button>

            <script src="script.js"></script>
        </div>
    )
}
