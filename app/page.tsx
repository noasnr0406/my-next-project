import Styles from "./page.module.css";

export default function Home() {
  return (
  <div>
    <h1 className={Styles.title}>テクノロジーの力で世界を変える</h1>
    <p className={Styles.description}>
      私たちは市場をリードしているグローバルテックカンパニーです。
    </p>
   </div>
  );
}