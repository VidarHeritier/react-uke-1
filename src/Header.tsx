import { Logo } from "./Logo.tsx";

export function Header() {
  return (
    <>
      <div>
        <header className="header">
          <Logo />
          <h1>SneakerPimps</h1>
          <h2>Worlds Pimpiest shoes</h2>
        </header>
      </div>
    </>
  );
}
