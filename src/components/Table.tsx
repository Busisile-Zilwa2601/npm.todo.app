type Column<T> = {
    key: keyof T;
    header: string;
}

interface Props<T> {
    data: T[];
    columns: Column<T>[];
    onRowClick?: (row: T) => void;

    renderCell?: (row: T, column: Column<T>) => React.ReactNode;
}

export function DataTable<T extends object>({data, columns, onRowClick, renderCell}: Props<T>) {
    return (
        <table>
            <thead>
                <tr>
                    { columns.map(colomn => (
                        <th>{colomn.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((row, index) => (
                    <tr
                        key={index}
                        onClick={()=> onRowClick?.(row)}
                    >
                        {
                            columns.map(column => (
                                <td key={String(column.key)}>
                                    {
                                        renderCell ? renderCell(row, column) : String(row[column.key])
                                    }
                                </td>
                            ))
                        }
                    </tr>
                ))}
            </tbody>
        </table>
    )
}