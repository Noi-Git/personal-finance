import { Outlet, useLoaderData } from 'react-router-dom'
import { fetchData } from '../helpers'

//loader
// eslint-disable-next-line react-refresh/only-export-components
export function mainLoader() {
  const userName = fetchData('userName')
  return { userName }
}

const Main = () => {
  const { userName } = useLoaderData()
  return (
    <>
      <div>{userName}</div>
      <Outlet />
    </>
  )
}

export default Main
