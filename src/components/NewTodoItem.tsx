import React, { useState } from 'react';

export const CreateTodo: React.FC<{onCreate: (data: any) => void}> = ({onCreate}) => {
    const [title, setTitle] = useState('');

    return (
        <div>
            <input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
            <button onClick={() => onCreate({ title})}>Add</button>
        </div>
    )
}