import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo.png"
import darkmode from "../assets/darkmode.png"
import { UserAuth } from "../context/AuthContext";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const handleThemeSwitch = () => setTheme(theme === 'dark' ? 'light' : 'dark');

 
  
  // Logout Function
  const { logout } = UserAuth();
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
   <div className="dark:bg-dm">
     <Disclosure as="nav" className="pb-3 drop-shadow-xl  dark:bg-dm rounded-b-lg ">
      {({ open }) => (
        <>
          <div className="">
            <div className="relative flex h-16  pr-5">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-babypink hover:text-darkcher focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className=" flex flex-1 ml-5 sm:items-stretch ">
                <div className="flex flex-shrink-0 items-center ml-6">
                  {/* logo */}
                  <img src={logo} alt="logo" className="h-16 w-16 mt-2" />
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:block  ">
                <div className="flex space-x-4 mt-4 ">
                  <Link
                    to="/homepage"
                    className={classNames(
                      "text-black hover:bg-stone-200 hover:text-black dark:hover:text-black dark:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    Home
                  </Link>
                  <Link
                    to="/MyMealPlan"
                    className={classNames(
                      "text-black hover:bg-stone-200 hover:text-black dark:hover:text-black dark:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    My Meal Plan
                  </Link>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
               
                <Menu as="div" className="relative ">
                  <div className="flex  space-x-4 ">
                    <div>
                      <button onClick= {handleLogout} className="mt-5 px-4 py-1 rounded-sm text-sm  dark:text-white  bg-pickle text-white ">
                        Log out
                      </button>
                    </div>
                    <div>
                      <button onClick={handleThemeSwitch}>
                        <img
                          src={darkmode}
                          alt="darkmode"
                          className="h-10 w-10 m-2 mt-3 p-2 bg-white rounded-full dark:bg-"
                        />
                      </button>
                    </div>
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
                <Link
                to="/homepage"
                className={classNames(
                  "text-black hover:bg- hover:text-",
                  "block rounded-md px-3 py-2 text-base font-medium dark:text-white"
                )}
              >
                Home
              </Link>
              <Link
                to="/MyMealPlan"
                className={classNames(
                  "text-black hover:bg- hover:text-",
                  "block rounded-md px-3 py-2 text-base font-medium dark:text-white"
                )}
              >
                My Meal Plan
              </Link>                             
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
   </div>
  );
}
