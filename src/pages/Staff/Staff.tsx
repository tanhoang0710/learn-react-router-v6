import { Outlet, NavLink } from 'react-router-dom'

export default function Staff() {
  return (
    <div>
      <h1 className='mb-6 text-lg'>Staff</h1>
      <div className='text-sm font-medium text-center text-gray-500 border-b border-gray-200 '>
        <ul className='flex flex-wrap -mb-px'>
          <li className='mr-2'>
            <NavLink
              to='/staff'
              end
              className={({ isActive }) =>
                `inline-block p-4 ${
                  isActive ? 'border-blue-600 text-blue-600' : 'hover:border-gray-300 hover:text-gray-600 '
                } active  rounded-t-lg border-b-2 `
              }
            >
              List
            </NavLink>
          </li>
          <li className='mr-2'>
            <NavLink
              to='/staff/add'
              className={({ isActive }) =>
                `inline-block p-4 ${
                  isActive ? 'border-blue-600 text-blue-600' : 'hover:border-gray-300 hover:text-gray-600 '
                } active  rounded-t-lg border-b-2 `
              }
              aria-current='page'
            >
              Add
            </NavLink>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}
