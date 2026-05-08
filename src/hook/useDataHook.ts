import { useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';
import { IUser } from '../types/IUser';
import { ITodo } from '../types/ITodo';
import { useAppContext } from '../context/AppContext';

export const useDataHook = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [userTodos, setUserTodos] = useState<ITodo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { selectedUser } = useAppContext();

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

    const fetchUserTodos = async (userId: string) => {
        try {
            setLoading(true);
            const data = await apiClient.get<ITodo[]>(`/todos?userId=${userId}`);
            setUserTodos(data);
        } catch (err) {
            setError(`${ err instanceof Error ? err.message : 'Failed to fetch user todos' }`);
        } finally {
            setLoading(false);
        } 
    };

    useEffect(() => {
        fetchUsers();
        fetchTodos();
    },[]);


    useEffect(() => {
        if(selectedUser) {
            fetchUserTodos(selectedUser.id);
        }
    }, [selectedUser]);

    return { users, todos, userTodos, loading, error };
};
