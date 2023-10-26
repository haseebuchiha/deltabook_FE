import { React, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { ChevronDoubleRightIcon, ChevronDoubleLeftIcon, ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

const sideNavigation = [
    { name: 'Feeds', items: [{ name: 'Post a feed', href: '/feeds/new' }, { name: 'View all feeds', href: '/feeds' }] },
    { name: 'Games', items: [{ name: 'Add a game', href: '/games/new' }, { name: 'View all games', href: '/games' }] }
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Sidebar = ({ children }) => {
    return (
        <div className="flex">
            <Disclosure as="div">
                {({ open }) => (
                    <>
                        <div className="block lg:hidden h-12 items-center justify-between">
                            <div className="fixed top-20 left-4 flex items-center lg:hidden z-50">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-sm p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    {open ? (
                                        <ChevronDoubleLeftIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <ChevronDoubleRightIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <Disclosure.Panel className="lg:hidden">
                                <div className="px-2 lg:px-6 fixed bg-zinc-800 w-96 min-h-screen rounded ml-2 py-4 z-40">
                                    <h1 className="text-center text-zinc-100 text-2xl font-bold mb-2">Deltabook</h1>
                                    <div className="flex flex-col">
                                        {sideNavigation.map((navs) => {
                                            return (navs.hasOwnProperty('items')) ?
                                                <Disclosure as='div' key={navs.name} className="relative w-full">
                                                    {({ open }) => (
                                                        <>
                                                            <Disclosure.Button className={classNames(
                                                                open ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                                                                'rounded-sm px-2 py-2 text-sm font-medium w-full'
                                                            )}>
                                                                <div className="flex justify-between items-center px-2">
                                                                    {navs.name}
                                                                    {open ? <ChevronUpIcon className='ml-1 h-4 w-4 inline' aria-hidden='true' /> : <ChevronDownIcon className='mr-1 ml-2 h-4 w-4 inline' aria-hidden='true' />}
                                                                </div>
                                                            </Disclosure.Button>
                                                            <Disclosure.Panel className="my-2 w-full rounded-sm h-auto bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                                {navs.items?.map((subitem) => (
                                                                    <Fragment key={subitem.name}>
                                                                        <a
                                                                            href={subitem.href}
                                                                            className={'bg-zinc-100 hover:bg-zinc-300 block px-2 py-2 text-sm text-start font-normal text-zinc-700'}
                                                                        >
                                                                            {subitem.name}
                                                                        </a>
                                                                    </Fragment>
                                                                ))}
                                                            </Disclosure.Panel>
                                                        </>)}
                                                </Disclosure>
                                                : <a
                                                    key={navs.name}
                                                    href={navs.href}
                                                    className={classNames(
                                                        navs.current ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                                                        'rounded-sm px-3 py-2 text-sm font-medium'
                                                    )}
                                                    aria-current={navs.current ? 'page' : undefined}
                                                >
                                                    {navs.name}
                                                </a>
                                        })}
                                    </div>
                                </div>

                            </Disclosure.Panel>
                        </div>
                        <div className="px-2 hidden lg:block lg:px-6 sticky top-16 bg-zinc-800 w-96 min-h-screen rounded ml-2 py-4 z-40">
                            <h1 className="text-center text-zinc-100 text-2xl font-bold mb-2">Deltabook</h1>
                            <div className="flex flex-col">
                                {sideNavigation.map((navs) => {
                                    return (navs.hasOwnProperty('items')) ?
                                        <Disclosure as='div' key={navs.name} className="relative w-full">
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className={classNames(
                                                        open ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                                                        'rounded-sm px-2 py-2 text-sm font-medium w-full'
                                                    )}>
                                                        <div className="flex justify-between items-center px-2">
                                                            {navs.name}
                                                            {open ? <ChevronUpIcon className='ml-1 h-4 w-4 inline' aria-hidden='true' /> : <ChevronDownIcon className='mr-1 ml-2 h-4 w-4 inline' aria-hidden='true' />}
                                                        </div>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="my-2 w-full rounded-sm h-auto bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        {navs.items?.map((subitem) => (
                                                            <Fragment key={subitem.name}>
                                                                <a
                                                                    href={subitem.href}
                                                                    className={'bg-zinc-100 hover:bg-zinc-300 block px-2 py-2 text-sm text-start font-normal text-zinc-700'}
                                                                >
                                                                    {subitem.name}
                                                                </a>
                                                            </Fragment>
                                                        ))}
                                                    </Disclosure.Panel>
                                                </>)}
                                        </Disclosure>
                                        : <a
                                            key={navs.name}
                                            href={navs.href}
                                            className={classNames(
                                                navs.current ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                                                'rounded-sm px-3 py-2 text-sm font-medium'
                                            )}
                                            aria-current={navs.current ? 'page' : undefined}
                                        >
                                            {navs.name}
                                        </a>
                                })}
                            </div>
                        </div>
                    </>
                )
                }
            </Disclosure >
            <div className="basis-full lg:basis-1/2">
                {children}
            </div>
        </div >
    )
}

export default Sidebar;