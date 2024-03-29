import Link from "next/link";
import { VscListSelection } from "react-icons/vsc";
import { BiMessageSquareAdd } from "react-icons/bi";
import { RxDashboard } from "react-icons/RX";


function Layout({children}) {
  return (
    <div className="container">
      <header>
        <p>Todo app</p>
      </header>
      <div className="container--main">
        <aside>
          <p>Welcome &#128075;</p>
          <ul>
            <li>
              <VscListSelection />
              <Link href="/">Todo</Link>
            </li>
            <li>
              <BiMessageSquareAdd />
              <Link href="/add-todo">Add Todo</Link>
            </li>
            <li>
              <RxDashboard />
              <Link href="/profile">Profile</Link>
            </li>
          </ul>
        </aside>
        <section>{children}</section>
      </div>
    </div>
  );
}

export default Layout;
