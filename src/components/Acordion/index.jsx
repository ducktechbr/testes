import styles from "./styles.module.css";

import { useState } from "react";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {data.map((item, i) => (
          <div className={styles.item} key={i}>
            <div className={styles.title} onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span style={{ fontSize: "2rem" }}>
                {selected === i ? "-" : "+"}
              </span>
            </div>
            <div
              className={selected === i ? styles.contentShow : styles.content}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const data = [
  {
    question: "O que é um token?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel natus aspernatur doloribus facilis voluptate aperiam quas culpa harum consequuntur, aut odit amet quibusdam necessitatibus possimus. Praesentium inventore nemo iure?",
  },
  {
    question: "O que é um token?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel natus aspernatur doloribus facilis voluptate aperiam quas culpa harum consequuntur, aut odit amet quibusdam necessitatibus possimus. Praesentium inventore nemo iure?",
  },
  {
    question: "O que é um token?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel natus aspernatur doloribus facilis voluptate aperiam quas culpa harum consequuntur, aut odit amet quibusdam necessitatibus possimus. Praesentium inventore nemo iure?",
  },
  {
    question: "O que é um token?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel natus aspernatur doloribus facilis voluptate aperiam quas culpa harum consequuntur, aut odit amet quibusdam necessitatibus possimus. Praesentium inventore nemo iure?",
  },
  {
    question: "O que é um token?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel natus aspernatur doloribus facilis voluptate aperiam quas culpa harum consequuntur, aut odit amet quibusdam necessitatibus possimus. Praesentium inventore nemo iure?",
  },
  {
    question: "O que é um token?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi vel natus aspernatur doloribus facilis voluptate aperiam quas culpa harum consequuntur, aut odit amet quibusdam necessitatibus possimus. Praesentium inventore nemo iure?",
  },
];
