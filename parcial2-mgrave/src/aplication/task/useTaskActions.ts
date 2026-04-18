import { useState, useEffect } from 'react';
import type { Client } from '../../domain/task/Client';
import { saveClients, loadClients } from '../../infraestructura/localstorage';

export const useClientActions = () => {
  const [clients, setClients] = useState<Client[]>([]);

  useEffect(() => {
    setClients(loadClients());
  }, []);

  const addClient = (name: string, amount: number) => {
    const newClient: Client = {
      id: Date.now().toString(),
      name,
      amount,
      paid: false,
    };
    const updatedClients = [...clients, newClient];
    setClients(updatedClients);
    saveClients(updatedClients);
  };

  const markAsPaid = (id: string) => {
    const updatedClients = clients.map(client =>
      client.id === id ? { ...client, paid: true } : client
    );
    setClients(updatedClients);
    saveClients(updatedClients);
  };

  return {
    clients,
    addClient,
    markAsPaid,
  };
};