import { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';
import { IUser } from '../types/IUser';
import { ITodo } from '../types/ITodo';

export const useDataHook = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const data = await apiClient.get<IUser[]>('/users');
            setUsers(data);
        } catch (err) {
            setError(`${ err instanceof Error ? err.message : 'Failed to fetch users' }`);
        } finally {
            setLoading(false);
        }
    };


    const fetchTodos = async () => {
        try {
            setLoading(true);
            const data = await apiClient.get<ITodo[]>('/todos');
            setTodos(data);
        } catch (err) {
            setError(`${ err instanceof Error ? err.message : 'Failed to fetch todos' }`);
        } finally {
            setLoading(false);
        }       
    };

    useEffect(() => {
        fetchUsers();
        fetchTodos();
    }, []);

    return { users, todos, loading, error };
};
