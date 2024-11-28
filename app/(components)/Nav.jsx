import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div icon={faHome} className="icon">
            Home
          </div>
        </Link>
        <Link href="/UserPage/new">
          <div icon={faTicket} className="icon">
            เพิ่มข้อมูล
          </div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
