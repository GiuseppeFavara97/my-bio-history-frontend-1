'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './Login.css';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password,
      });

      console.log('Risposta login:', response.data);

      const token = response.data.access_token;

      if (!token) {
        setError('Token non ricevuto dal server');
        return;
      }

      localStorage.setItem('token', token);

      router.push('/'); // redirect alla home
    } catch (err) {
      setError('Credenziali errate o utente non trovato.');
    }
  };

  return (
   <div className="areaLogin">
      <Card className ="bg-white/50 backdrop-blur-sm shadow-md">
        <CardHeader className="">
          <CardTitle className="text-center text-3xl">Login</CardTitle>
          <CardDescription className="text-center">Accedi al tuo account</CardDescription>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent>
            <input
              className="input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <br />
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </CardContent>

          <CardFooter className="mt-7">
            <button id="bottoneaccedi" type="submit" className="input mr-12">
              Accedi
            </button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};
export default Login;
