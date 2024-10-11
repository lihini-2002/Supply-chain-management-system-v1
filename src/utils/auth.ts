// utils/auth.ts
export function isAuthenticated() {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return !!user;
    }
    return false;
  }
  