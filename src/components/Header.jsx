/* eslint-disable react/prop-types */
function Header({ title, subtitle }) {
  return (
    <>
      <header>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </header>
    </>
  );
}

export default Header;
