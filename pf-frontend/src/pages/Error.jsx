import { Link, useRouteError } from 'react-router-dom'
import { HomeIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'

const Error = () => {
  const error = useRouteError()
  console.log(error)

  return (
    <>
      <div className='error'>
        <h1>Oh oh! We&lsquo;ve got a problem</h1>
        <p>{error.message || error.status || error.statusText}</p>
        <div className='flex-md'>
          <button>
            <ArrowUturnLeftIcon width={20} />
            <span>Go Back</span>
          </button>
          <Link to='/' className='btn btn--dark'>
            <HomeIcon width={20} />
            <span>Go home</span>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Error
