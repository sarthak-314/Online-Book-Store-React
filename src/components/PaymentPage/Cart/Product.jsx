import React from 'react'

const Product = props => {
    const { title, category, condition, price } = props
    return (
<li class="list-group-item d-flex justify-content-between lh-condensed">
        <div>
    <h6 class="my-0">{title}</h6>
    <small class="text-muted">Category: {category} Condition: {condition}</small>
        </div>
    <span class="text-muted">Rs.{price}</span>
</li>
    )
}

export default Product