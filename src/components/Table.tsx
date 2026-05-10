import { useMemo, useState } from "react";

type Column<T> = {
    key: keyof T;
    header: string;
    filterable?: boolean;
}

interface Props<T> {
    data: T[];
    columns: Column<T>[];
    onRowClick?: (row: T) => void;

    renderCell?: (row: T, column: Column<T>) => React.ReactNode;

    manulaPageSize?: number;
}

export function DataTable<T extends object>({data, columns, onRowClick, renderCell, manulaPageSize = 5}: Props<T>) {
    const [currentPage, setCurrentPage ] = useState(1);
    const [ filters, setFilters ] = useState<Partial<Record<keyof T, string>>>({});
    const [pageSize, setPageSize]  = useState(manulaPageSize);

    
    //filtering
    const fileteredData = useMemo(()=> {
        return data.filter(row => {
            return columns.every(column => {
                const filterValue = filters[column.key];
                
                if(!filterValue) {
                    return true;
                }
                
                const cellValue = String(row[column.key] ?? '').toLowerCase();
                
                return cellValue.includes(filterValue.toLowerCase())
            })
        })
    }, [data, filters, columns]);
    
    const totalPages  = Math.ceil(fileteredData.length / pageSize);
    
    //paging 
    const paginatedData = useMemo(() => {
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;

        return fileteredData.slice(start, end)
    }, [fileteredData, currentPage, pageSize]);
    
    const gotToPage = (page: number) => {
        const nextPage = Math.min(Math.max(page, 1), totalPages);
        setCurrentPage(nextPage);
    }

    const goToLastPage = () => {
        gotToPage(totalPages);
    }

    return (
        <div>
            <select onChange={(e) => setPageSize(Number(e.target.value))}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
            </select>
            <table>
                <thead>
                    <tr>
                        { columns.map(colomn => (
                            <th key={String(colomn.key)}>
                                <div>
                                    <div>
                                        {colomn.header}
                                    </div>
                                    {
                                        colomn.filterable && (
                                            <input
                                                type="text"
                                                placeholder={`Filter ${colomn.header}`}
                                                value={filters[colomn.key] || ''}
                                                onChange={(e)=> setFilters(prev => ({
                                                    ...prev,
                                                    [colomn.key]: e.target.value
                                                }))}
                                            />
                                        )
                                    }
                                </div>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((row, index) => (
                        <tr
                        key={index}
                        onClick={()=> onRowClick?.(row)}
                        style={{cursor : onRowClick ? 'pointer' : 'default'}}
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
            <div className="pagination">
                <button 
                    onClick={()=> gotToPage(1)} 
                    disabled = {currentPage === 1}>
                        First
                </button>
                <button
                    onClick={()=> gotToPage(currentPage - 1)}
                    disabled = {currentPage === 1}
                >Previous</button>
                {/* {
                    Array.from({length: totalPages}, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => gotToPage(index + 1)}
                        >{ index + 1 }</button>
                    ))
                } */}
                <button
                    onClick = {()=> gotToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                > Next </button>
                <button
                    onClick={goToLastPage}
                    disabled={currentPage === totalPages}
                >Last</button>
            </div>
        </div>
    )
}