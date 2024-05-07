import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helpers'

//loader
// eslint-disable-next-line react-refresh/only-export-components
export function dashboardLoader() {
  const userName = fetchData('userName')
  return { userName }
}

const Dashboard = () => {
  //allow to access the dashboardLoader function above
  //the dashboardLoader function is connected to loader inside a specific path
  const { userName } = useLoaderData()

  return <div>Get userName form localStorage {userName}</div>
}

export default Dashboard
