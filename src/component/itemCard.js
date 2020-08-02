import React from 'react'

export default function ItemCard({item}) {
    return (
        <div className="itemcard-conatiner">
            <img src={item.cover} alt={item.title} />
        </div>
    )
}
