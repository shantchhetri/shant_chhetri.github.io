import { useEffect, useState } from 'react';
import { profile } from '../data/profile';

/** Assembles the email address in the browser only (not in static HTML). */
export function useEmail() {
  const [email, setEmail] = useState('');
  useEffect(() => setEmail(`${profile.emailUser}@${profile.emailDomain}`), []);
  return email;
}
