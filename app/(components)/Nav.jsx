import Link from "next/link";

const Nav = () => {
  return (
    <>
      <div className="">
        <Link href="/">
          <div className="text-center truncate  px-4 py-4 text-lg">Home</div>
        </Link>
      </div>
    </>
  );
};

export default Nav;
