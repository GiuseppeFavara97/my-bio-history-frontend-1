"use client";
import { useEffect, useState } from 'react';

type User = {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    birthday: Date;
    birthday_place: string;
    province: string;
    sex: string;
    phoneNumber: string;
    createdAt: Date;
    updatedAt: Date;
    role: string
}

export default function Provausers() {
    const [users, setUsers] = useState<User[]>([]); // Stato per memorizzare gli utenti

    useEffect(() => {
        const token = localStorage.getItem("token");

        fetch('http://localhost:3001/api/users', { // Chiamata all'API per ottenere gli utenti nel mio DB
            headers: {
                Authorization: `Bearer ${token}`, // Invio il token JWT nell'header Authorization
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Errore: ${response.status}`);
            }
            return response.json(); // Le API rispondono con un JSON
        })
        .then(data => setUsers(data)) // Aggiorno lo stato con i dati ricevuti
        .catch(error => console.error('Errore nel recuperare i dati:', error)); // Gestione degli errori
    }, []); // Effettua la chiamata solo al primo render

    console.log('Stato users:', users);

    return (
        <div>
            <span className="inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm">Lista Utenti
                <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
                </svg>
            </span>
            <ul className="bg-gray-100 rounded-lg p-4">
                {Array.isArray(users) && users.map(user => (
                    <li
                        key={user.id}
                        className="mb-2 p-2 rounded bg-blue-100 text-blue-900 hover:bg-blue-200 transition"
                    >
                        <span className="inset-shadow-sm inset-shadow-indigo-500/50 shadow-xl/30 font-mono">Username:</span> <span className="font-semibold">{user.username}</span>
                        | Nome: <span className="font-semibold">{user.firstName} </span>
                        | Cognome: <span className="font-semibold">{user.lastName}</span>
                        | Email: <span className="font-semibold">{user.email}</span>
                        | Anno di nascita: <span className="font-semibold"> {new Date(user.birthday).toISOString().slice(0, 10)}</span>
                        | Luogo di nascita: <span className="font-semibold">{user.birthday_place}</span>
                        | Provincia: <span className="font-semibold">{user.province}</span>
                        | Sesso: <span className="font-semibold">{user.sex}</span>
                        | Telefono: <span className="font-semibold">{user.phoneNumber}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
