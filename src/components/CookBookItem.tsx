import { Cookbook } from "../models/CookBook.model";
import styles from "./cookbookitem.module.css";

function CookBookItem({ id, parent, description }: Cookbook) {
  return (
    <div className={styles.item_container}>
      <div className={styles.item_image_container}>
        <div className={styles.item_image}>
          <img src="book.webp" alt="book" />
        </div>
        <div className={styles.bubble}></div>
        {/* <div className={styles.bubble}> */}
        {/* <svg width="80" height="40" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,40 A40,40 0 0,1 80,40" fill="#2ba84a" />
          </svg> */}
        {/* <svg width="80" height="80" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#2ba84a" />
          </svg>
        </div> */}
      </div>

      <div className={styles.item}>
        <span>{id}</span>
        <span>{parent}</span>
        <span className={styles.description}>{description}</span>
      </div>
    </div>
  );
}

export default CookBookItem;
