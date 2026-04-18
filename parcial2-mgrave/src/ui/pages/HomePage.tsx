

import { useState } from 'react';
import { useClientActions } from '../../aplication/task/useTaskActions';

function HomePage() {
  const { clients, addClient, markAsPaid } = useClientActions();
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && amount) {
      addClient(name, parseFloat(amount));
      setName('');
      setAmount('');
    }
  };

  return (
    <>
        <h3>Listado de todos los clientes</h3>
        <br />
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-3">
            <div className="flex flex-row gap-4">
            <input
                type="text"
                placeholder="Nombree"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white-500"
            />
            <input
                type="number"
                placeholder="Monto a pagar"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white-500"
            />
            <button
                type="submit"
                className="bg-pink-500 text-black rounded px-4 py-2 hover:bg-white-300 transition-colors duration-200"
            >
                AGREGAR
            </button>
            </div>
        </form>

        <ul className="mt-4">
            {clients.map(client => (
            <li key={client.id} className="flex justify-between items-center p-2 border-b">
                <span className={client.paid ? 'line-through' : ''}>{client.name} - ${client.amount}</span>
                {!client.paid && (
                <button
                    onClick={() => markAsPaid(client.id)}
                    className="bg-pink-200 text-black rounded px-4 py-2 hover:bg-white-600"
                >
                    PAGADO
                </button>
                )}
                {client.paid && <span className="text-white-500">PAGADO</span>}
            </li>
            ))}
        </ul>
    </>
    );
}

export default HomePage;
