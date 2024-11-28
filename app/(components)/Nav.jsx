import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <div  className="icon">
            Home
          </div>
        </Link>
        <Link href="/UserPage/new">
          <div  className="icon">
            เพิ่มข้อมูล
          </div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
