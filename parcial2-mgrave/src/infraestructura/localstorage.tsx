import type { Client } from '../domain/task/Client';

const STORAGE_KEY = 'clients';

export const saveClients = (clients: Client[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clients));
};

export const loadClients = (): Client[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};