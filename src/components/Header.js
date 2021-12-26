import React, { useMemo } from 'react'

export default function Header() {

    const renderTitle = useMemo(() => title(), [])
    function title() {
        return <h1>Movies Database</h1>
    }
    return (
        <header>
            {renderTitle}
        </header>
    )
}
