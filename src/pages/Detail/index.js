import React from 'react'

export default function Detail({ match: { params } }) {
    return (
        <div>
            Detail {params.id}
        </div>
    )
}
