// Local storage

export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 800))
const generateRandomColor = () => {
  const existingBudgetLength = fetchData('budgets')?.length ?? 0
  return `${existingBudgetLength * 34} 65% 50%`
}

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

//Get all items from local storage
export const getAllMatchingItems = ({ category, key, value }) => {
  const data = fetchData(category) ?? []
  return data.filter((item) => item[key] === value)
}
// export const deleteItem = ({ key }) => {
//   return localStorage.removeItem(key)
// }

export const deleteItem = ({ key, id }) => {
  const existingData = fetchData(key)
  if (id) {
    const newData = existingData.filter((item) => item.id !== id)
    return localStorage.setItem(key, JSON.stringify(newData))
  }
  return localStorage.removeItem(key)
}

export const calculateSpentByBudget = (budgetId) => {
  const expenses = fetchData('expenses') ?? []
  const budgetSpent = expenses.reduce((acc, expense) => {
    //check if expense.id === budgetId I passed in
    if (expense.budgetId !== budgetId) return acc
    // console.log('expenses-reduce', expenses)

    //add the current amount to my total
    return (acc += expense.amount)
  }, 0)
  return budgetSpent
}

//Format percentage
export const formatPercentage = (amt) => {
  return amt.toLocaleString(undefined, {
    style: 'percent',
    minimumFractionDigits: 0,
  })
}

//Format currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  })
}

//Format date to local string
export const formatDateToLocalString = (epoch) =>
  new Date(epoch).toLocaleDateString()

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(),
  }
  const existingBudgets = fetchData('budgets') ?? []
  return localStorage.setItem(
    'budgets',
    JSON.stringify([...existingBudgets, newItem])
  )
}

export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId,
  }
  const existingExpenses = fetchData('expenses') ?? []
  return localStorage.setItem(
    'expenses',
    JSON.stringify([...existingExpenses, newItem])
  )
}
