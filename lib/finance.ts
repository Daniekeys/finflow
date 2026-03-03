export type Transaction = {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  category: string;
  recipient?: string;
  date: string;
  status: 'Completed' | 'Pending';
  icon: string;
};

const INITIAL_BALANCE = 12450.00;
const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    type: 'expense',
    amount: 120.50,
    category: 'Shopping',
    recipient: 'Amazon',
    date: new Date().toISOString(),
    status: 'Completed',
    icon: 'shopping_bag'
  },
  {
    id: '2',
    type: 'income',
    amount: 2500.00,
    category: 'Salary',
    recipient: 'Tech Corp',
    date: new Date(Date.now() - 86400000).toISOString(),
    status: 'Completed',
    icon: 'payments'
  },
  {
    id: '3',
    type: 'expense',
    amount: 65.00,
    category: 'Food',
    recipient: 'Uber Eats',
    date: new Date(Date.now() - 172800000).toISOString(),
    status: 'Completed',
    icon: 'restaurant'
  }
];

export const getBalance = (): number => {
  if (typeof window !== 'undefined') {
    const balance = sessionStorage.getItem('finflow_balance');
    return balance ? parseFloat(balance) : INITIAL_BALANCE;
  }
  return INITIAL_BALANCE;
};

export const getTransactions = (): Transaction[] => {
  if (typeof window !== 'undefined') {
    const transactions = sessionStorage.getItem('finflow_transactions');
    return transactions ? JSON.parse(transactions) : INITIAL_TRANSACTIONS;
  }
  return INITIAL_TRANSACTIONS;
};

export const addTransaction = (transaction: Omit<Transaction, 'id' | 'date'>) => {
  if (typeof window !== 'undefined') {
    const currentTransactions = getTransactions();
    const currentBalance = getBalance();

    const newTransaction: Transaction = {
      ...transaction,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString(),
    };

    const updatedTransactions = [newTransaction, ...currentTransactions];
    
    let newBalance = currentBalance;
    if (transaction.type === 'income') {
      newBalance += transaction.amount;
    } else {
      newBalance -= transaction.amount;
    }

    sessionStorage.setItem('finflow_transactions', JSON.stringify(updatedTransactions));
    sessionStorage.setItem('finflow_balance', newBalance.toString());
  }
};
