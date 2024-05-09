import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helpers'
import { Intro } from '../components/Intro'
import { toast } from 'react-toastify'

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
  try {
    // throw new Error('You are done!') //will be use with custom error message
    localStorage.setItem('userName', JSON.stringify(formData.userName))
    return toast.success(`Welcome, ${formData.userName}`)
  } catch (error) {
    throw new Error('There was a problem creating your account.')
  }
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
