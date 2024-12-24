import React from "react";
import styles from "./layout.module.css";

function Layout({
  headerChildren,
  children,
}: {
  headerChildren?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className={styles.page}>
      <header>
        <h1>
          <a href="/" className="textDecoration-none">
            RUBICON
          </a>
        </h1>
        {headerChildren}
      </header>
      <main>{children}</main>
      <footer>
        <span>
          Made by{" "}
          <a href="https://metamatic.dev" target="_blank">
            Joshua
          </a>
          .
        </span>
        <span>Compatible with TVS Apache RTR motorcycles.</span>
      </footer>
    </div>
  );
}

export default Layout;
