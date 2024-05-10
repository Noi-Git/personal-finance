// Local storage

export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 3000))
const generateRandomColor = () => {
  const existingBudgetLength = fetchData('budgets')?.length ?? 0
  return `${existingBudgetLength * 34} 65% 50%`
}

export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key)
}

//Format currency
export const formatCurrency = (amt) => {
  return amt.toLocaleString(undefined, {
    style: 'currency',
    currency: 'USD',
  })
}

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
