export type User = {
  name: string;
  email: string;
};

export const saveUserSession = (user: User) => {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('finflow_user', JSON.stringify(user));
    sessionStorage.setItem('finflow_onboarded', 'false'); // Default to not onboarded
  }
};

export const completeOnboarding = () => {
    if (typeof window !== 'undefined') {
        sessionStorage.setItem('finflow_onboarded', 'true');
    }
}

export const getUserSession = (): User | null => {
  if (typeof window !== 'undefined') {
    const user = sessionStorage.getItem('finflow_user');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

export const logoutUser = () => {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('finflow_user');
    sessionStorage.removeItem('finflow_onboarded');
  }
};
