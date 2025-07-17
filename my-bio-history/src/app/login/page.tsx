'use client'

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './Login.css';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Progress } from "@/components/ui/progress";

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setProgress(0);
    setLoading(true);

    // parte che uso per simulare un caricamento
    const intervallo = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) return prev; // finchè non arriva la risposta dal backend si ferma a questa soglia cheh o settato
        return prev + 10;
      });
    }, 200);

    try {
      const response = await axios.post('http://localhost:3001/api/auth/login', {
        email,
        password,
      });

      clearInterval(intervallo);
      setProgress(100);

      const token = response.data.access_token;

      if (!token) {
        throw new Error('Token non ricevuto');
      }

      localStorage.setItem('token', token);

      setTimeout(() => {
        router.push('/');
      }, 300); // piccola attesa per mostrare il 100%
    } catch (err) {
      clearInterval(intervallo);
      setProgress(0);
      setLoading(false);
      setError('Credenziali errate o utente non trovato.');
    }
  };

  return (  //min-h-screen flex items-center justify-center bg-gray-100 vicino ad areaLogin se vogliamo centrare tutto
    <div className="areaLogin   ">
      <Card className=" bg-white/50 backdrop-blur-sm shadow-lg rounded-lg p-6 max-w-2xl mx-auto">
        <CardHeader>
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
              disabled={loading}
            />
            <br />
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              disabled={loading}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </CardContent>

          <CardFooter className="mt-7">
            <button id="bottoneaccedi" type="submit" className="input mr-12" disabled={loading}>
              {loading ? 'Accesso in corso...' : 'Accedi'}
            </button>
          </CardFooter>

          {loading && <Progress value={progress} className="mt-4" />}
        </form>
      </Card>
    </div>
  );
};

export default Login;
