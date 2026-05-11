import { useDataHook } from "../hook/useDataHook";
import { ITodo } from "../types/ITodo";

import {  DataTable } from '../components/Table';
import { LoadingSpinner } from "../components/Spinner";

export const TodoPage: React.FC = () => {
    const { todos, error, loading } = useDataHook();

    if(loading) return <LoadingSpinner />;
    if(error) return <p>{error}</p>;

    return(
        <DataTable<ITodo>
            data={todos}
            columns={[
                { key: 'title', header: 'Title' },
                { key: 'completed', header: 'Completed' },
            ]}
            renderCell={(row, column) => {
                if (column.key === 'completed') {
                    return row.completed ? '✅' : '❌';
                }

                return String(row[column.key]);
            }}
        />
    )
}