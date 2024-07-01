import React from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <div style={{textAlign:'left', marginBottom:'10px'}}>
            <span>
                Buscar: {' '}
                <input value={filter || ''} onChange={(e) => setFilter(e.target.value)} />
            </span>
        </div>

    )
}