"use client";
import Link from "next/link";
import LogoutButton from "./logout";
import Cookies from 'js-cookie';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { getUsername } from "@/utils/auth";

const InsideHeader = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const [username, setUsername] = useState<string | null | undefined>(null);

  useEffect(() => {
    setUsername(getUsername());
  }, []);

  const handleNotificationClick = () => {
    const successMessage = Cookies.get('successMessage');
    if (successMessage) {
      setNotification(successMessage);
      // Remove success message from cookie
      Cookies.remove('successMessage');
    }
  };

  const clearNotification = () => {
    setNotification(null);
  };

  return (
    <header className="bg-customBlack py-4">
      <div className="container mx-auto flex justify-between items-center max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo or site title */}
        <h1 className="py-100">
          <Link href="/">
            <Image
              src="/aiobs2.png"
              alt="AIOBS Logo"
              width={130}
              height={20}
              className=""
            />
          </Link>
        </h1>
        {/* Navigation links */}
        <nav className="flex text-end">
          <ul className="flex space-x-4 relative">
            <li>
              <button
                type="button"
                className="hover:bg-customBlack2 text-white font-semibold rounded focus:outline-none focus:shadow-outline mr-auto w-full h-6 sm:w-auto relative"
                onClick={handleNotificationClick}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.777a5.15 5.15 0 0 0 4.5 5.199A5.006 5.006 0 0 0 21 25v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707M19 25a3 3 0 0 1-6 0v-1h6Zm8-3H5v-1.586l2.707-2.707A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .293.707L27 20.414Z"
                  ></path>
                </svg>
                {notification && (
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                )}
              </button>
              {notification && (
                <div className="absolute top-8 right-0 bg-green-500 text-white p-2 max-w-md rounded-md text-center z-10">
                  {notification}
                  <button
                    className="text-white ml-2"
                    onClick={clearNotification}
                  >
                    Clear
                  </button>
                </div>
              )}
            </li>
            <li>
              {username !== null && username !== undefined ? (
                <p className="text-white">Logged in As {username}</p>
              ) : (
                <p className="text-white">Loading...</p>
              )}
            </li>
            <li>
              <LogoutButton />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default InsideHeader;
