import Image from "next/image";

interface NavbarProps {
  imagePath: string;
  navbarTtles: string[];
  titleUrls: string[];
}

export default function Navbar({
  imagePath,
  navbarTtles,
  titleUrls,
}: NavbarProps) {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <Image src={imagePath} alt="Bootstrap" width="45" height="45" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navbarTtles.map((title, index) => (
              <li className="nav-item" key={title}>
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={titleUrls[index]}
                >
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
