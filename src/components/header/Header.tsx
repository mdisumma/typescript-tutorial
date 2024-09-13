export default function Header(props: any) {
  return (
    <header className="header">
      <h1 id="componentStart" onClick={props.onClick}>
        Typescript tutorial
      </h1>
    </header>
  );
}
