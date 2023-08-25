import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Feeds', href: '#', current: false, subitems: [{ name: 'Show Feeds', href: '/feeds' }, { name: 'New Feed', href: '/feeds/new' }] },
  { name: 'Friends', href: '/Friends', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-zinc-800 sticky top-0 after:bg-black z-50 w-screen after:h-px after:w-full after:block">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/vite.svg"
                    alt="Deltabook"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => {
                      return (item.hasOwnProperty('subitems')) ?
                        <Menu as='div' key={item.name} className="relative">
                          <Menu.Button className={classNames(
                            item.current ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}>
                            <div>
                              {item.name}
                              <ChevronDownIcon className='-mr-1 ml-2 h-4 w-4 inline' aria-hidden='true' />
                            </div>
                            <Transition
                              as={Fragment}
                              enter="transition ease-out duration-100"
                              enterFrom="transform opacity-0 scale-95"
                              enterTo="transform opacity-100 scale-100"
                              leave="transition ease-in duration-75"
                              leaveFrom="transform opacity-100 scale-100"
                              leaveTo="transform opacity-0 scale-95"
                            >
                              <Menu.Items className="absolute left-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {item.subitems.map((subitem) => (
                                  <Menu.Item key={subitem.name}>
                                    {({ active }) => (
                                      <a
                                        href={subitem.href}
                                        className={classNames(active ? 'bg-zinc-100' : '', 'block px-4 py-2 text-sm text-start font-normal text-zinc-700')}
                                      >
                                        {subitem.name}
                                      </a>
                                    )}
                                  </Menu.Item>
                                ))
                                }
                              </Menu.Items>
                            </Transition>
                          </Menu.Button>
                        </Menu>
                        : <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                    })}
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-zinc-800 p-1 text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6 bg-zinc-800 text-zinc-400" aria-hidden="true" />
                </button>

                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-zinc-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-zinc-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
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
                            className={classNames(active ? 'bg-zinc-100' : '', 'block px-4 py-2 text-sm text-zinc-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-zinc-100' : '', 'block px-4 py-2 text-sm text-zinc-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-zinc-100' : '', 'block px-4 py-2 text-sm text-zinc-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => {
                return <Disclosure key={item.name}>
                  <Disclosure.Button
                    as={item.hasOwnProperty('subitems') ? "div" : "a"}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-zinc-900 text-white' : 'text-zinc-300 hover:bg-zinc-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium cursor-pointer'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                    {item.subitems !== undefined &&
                      <ChevronDownIcon className='-mr-1 ml-2 h-5 w-5 mt-1 inline float-right' aria-hidden='true' />
                    }
                  </Disclosure.Button>
                  {item.subitems !== undefined &&
                    <Disclosure.Panel>
                      <Disclosure as='div'>
                        {item.subitems.map((subitem) => (
                          <Disclosure.Button
                            key={subitem.name}
                            as={subitem.hasOwnProperty('subitems') ? "div" : "a"}
                            href={subitem.href}
                            className='text-zinc-300 hover:bg-zinc-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                          >
                            {subitem.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure>
                    </Disclosure.Panel>
                  }
                </Disclosure>
              })}
            </div >
          </Disclosure.Panel>
        </>
      )
      }
    </Disclosure >
  )
}

