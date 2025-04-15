import ThemeToggle from "./ThemeToggle";

const Header = ({ onSearch }) => {
  return (
    <header className=" sticky top-0 z-50 p-4 shadow bg-white dark:bg-gray-900 flex justify-between items-center">
        <div className=" flex justify-center items-center gap-4">
        <img src="https://media.licdn.com/dms/image/v2/C4D0BAQGBX4Kj6ClDQg/company-logo_100_100/company-logo_100_100/0/1676392838415?e=1750291200&v=beta&t=UdYGePIQI7kEVfoGLedqdFrpVi26pNdPBDl3f_bcsN0" alt="" className="w-9"/>
      <h1 className="text-xl font-bold text-gray-900 dark:text-white"> Store</h1>
        </div>
      <div className="flex items-center gap-2">
        <input
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search products..."
          className=" px-2 py-1 border rounded w-28  md:w-64 lg:w-80 dark:bg-gray-800 dark:text-white sm:w-40"
        />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
