import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function Form(props) {
  return (
    <>
      <button onClick={props.handleClick}>Change Mode</button>
      <Panel title="Welcome">
        <Button>Sign In</Button>
        <Button>Sign UP</Button>
      </Panel>
    </>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext);
  return (
    <>
      <section className={theme}>
        <h1>{title}</h1>
        {children}
      </section>
    </>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext);
  return <button className={theme}>{children}</button>;
}
