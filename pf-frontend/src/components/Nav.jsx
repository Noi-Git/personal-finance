import { Form, NavLink } from 'react-router-dom'
import logomark from '../assets/logomark.svg'
const Nav = ({ userName }) => {
  return (
    <>
      <nav>
        {/* NavLink will set area equal to current page  */}
        <NavLink to='/' aria-label='Go to home page'>
          <img src={logomark} alt='' height={30} />
          <span>Personal Finance</span>
        </NavLink>
        {/* if there is user -- show form */}
        {userName && (
          <Form method='post' action='/logout'>
            <button type='submit' className='btn btn--warning'>
              <span>Delete User</span>
            </button>
          </Form>
        )}
      </nav>
    </>
  )
}

export default Nav
