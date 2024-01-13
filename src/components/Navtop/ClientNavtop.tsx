"use client";

/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Fragment } from "react";
import {
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";
import { Disclosure as HDisclosure, Menu, Transition } from "@headlessui/react";
import getAssetBasePath from "@/utils/getAssetBasePath";
import Image from "next/image";
import { UserResponseDto } from "@/services/UserService/dto/user-response.dto";

export const Disclosure: typeof HDisclosure = HDisclosure;

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
}
interface ClientNavtopProps {
    user: UserResponseDto | null;
}

const ClientNavtop: React.FC<ClientNavtopProps> = ({
    user,
}): React.JSX.Element => {
    return (
        <Disclosure as="nav" className="bg-white shadow">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 justify-between">
                            <div className="flex">
                                <div className="-ml-2 mr-2 flex items-center md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XMarkIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <Bars3Icon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-shrink-0 items-center">
                                    <Image
                                        src={getAssetBasePath("blog-logo.svg")}
                                        alt="Blog Logo"
                                        width="40"
                                        height="40"
                                    />
                                    <span className="text-sm font-sans font-semibold text-primary-400 ml-2">
                                        Blogify
                                    </span>
                                </div>
                                {user && (
                                    <div className="hidden md:ml-6 md:flex md:space-x-8">
                                        {/* Current: "border-primary-300 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                                        <a
                                            href="#"
                                            className="inline-flex items-center border-b-2 border-primary-300 px-1 pt-1 text-xs font-sans text-gray-900"
                                        >
                                            Dashboard
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xs font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            Your Blogs
                                        </a>
                                        <a
                                            href="#"
                                            className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-xs font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                                        >
                                            About us
                                        </a>
                                    </div>
                                )}
                            </div>
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <button
                                        type="button"
                                        className="relative inline-flex items-center gap-x-1.5 rounded-md bg-primary-300 px-3 py-2 text-2xs font-medium text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                                    >
                                        <PlusIcon
                                            className="-ml-0.5 h-5 w-5"
                                            aria-hidden="true"
                                        />
                                        Start Writing
                                    </button>
                                </div>
                                {user && (
                                    <div className="hidden md:ml-4 md:flex md:flex-shrink-0 md:items-center">
                                        <button
                                            type="button"
                                            className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">
                                                View notifications
                                            </span>
                                            <BellIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>

                                        {/* Profile dropdown */}
                                        <span className=" md:inline ml-2  font-sans text-xs text-gray-700 font-medium">
                                            {user?.username}
                                        </span>
                                        <Menu
                                            as="div"
                                            className="relative ml-3"
                                        >
                                            <div>
                                                <Menu.Button className="relative flex rounded-full bg-white text-xs text-gray-400 hover:text-gray-500 ">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">
                                                        Open user menu
                                                    </span>
                                                    <Cog6ToothIcon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-200"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-xs text-gray-700"
                                                                )}
                                                            >
                                                                Your Profile
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-xs text-gray-700"
                                                                )}
                                                            >
                                                                Settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(
                                                                    active
                                                                        ? "bg-gray-100"
                                                                        : "",
                                                                    "block px-4 py-2 text-xs text-gray-700"
                                                                )}
                                                            >
                                                                Sign out
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 pb-3 pt-2">
                            {/* Current: "bg-primary-50 border-primary-300 text-primary-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-primary-300 bg-primary-50 py-2 pl-3 pr-4 text-base font-medium text-primary-700 sm:pl-5 sm:pr-6"
                            >
                                Dashboard
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                            >
                                Your Blogs
                            </Disclosure.Button>
                            <Disclosure.Button
                                as="a"
                                href="#"
                                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700 sm:pl-5 sm:pr-6"
                            >
                                About us
                            </Disclosure.Button>
                        </div>
                        user && (
                        <div className="border-t border-gray-200 pb-3 pt-4">
                            <div className="flex items-center px-4 sm:px-6">
                                <div className="ml-3">
                                    <div className="text-base font-medium text-gray-800">
                                        {user?.username}
                                    </div>
                                    <div className="text-xs font-medium text-gray-500">
                                        {user?.email}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    className="relative ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 "
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">
                                        View notifications
                                    </span>
                                    <BellIcon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                    />
                                </button>
                            </div>
                            <div className="mt-3 space-y-1">
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                                >
                                    Your Profile
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                                >
                                    Settings
                                </Disclosure.Button>
                                <Disclosure.Button
                                    as="a"
                                    href="#"
                                    className="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800 sm:px-6"
                                >
                                    Sign out
                                </Disclosure.Button>
                            </div>
                        </div>
                        )
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};
export default ClientNavtop;
