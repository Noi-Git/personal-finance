import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helpers'
import { Intro } from '../components/Intro'

//loader
// eslint-disable-next-line react-refresh/only-export-components
export function dashboardLoader() {
  const userName = fetchData('userName')
  return { userName }
}

// action
// eslint-disable-next-line react-refresh/only-export-components
export async function dashboardAction({ request }) {
  const data = await request.formData()
  // console.log({ data, request })
  // const userName = data.get('userName')
  // console.log(userName)
  const formData = Object.fromEntries(data)
  // console.log(formData)
  localStorage.setItem('userName', JSON.stringify(formData.userName))
}

const Dashboard = () => {
  //allow to access the dashboardLoader function above
  //the dashboardLoader function is connected to loader inside a specific path
  const { userName } = useLoaderData()
  return (
    <>
      {userName ? <p>{userName}</p> : <Intro />}
      {/* <Intro /> */}
    </>
  )
}

export default Dashboard
