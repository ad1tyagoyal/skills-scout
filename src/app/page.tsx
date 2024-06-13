import Navbar from "./components/navbar";
import styles from "./page.module.css";
import {
  NAVBAR_LOGO_PATH,
  NAVBAR_TITLES,
  NAVBAR_TITLES_URL,
} from "./utils/constants";

export default function Home() {
  return (
    <main>
      <Navbar
        imagePath={NAVBAR_LOGO_PATH}
        navbarTtles={NAVBAR_TITLES}
        titleUrls={NAVBAR_TITLES_URL}
      />
      <div className={styles.centre_div}></div>
    </main>
  );
}
