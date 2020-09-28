import React from 'react'

const BookInfo = (props) => {
    const { category, condition, popular } = props
    return (
        <div class="col-md-6 mb-4">

        <div class="p-4">

            <div class="mb-3">
              <a href="">
    <span class="badge purple mr-1">{category}</span>
              </a>
              <a href="">
    <span class="badge blue mr-1">{condition}</span>
              </a>
              <a href="">
    <span class="badge red mr-1">{popular}</span>
              </a>
            </div>

            <p class="lead">
              <span class="mr-1">
                <del>Rs.200    </del>
              </span>
              <span>    Rs.100</span>
            </p>

            <p class="lead font-weight-bold">Description</p>

            <p>Book Description</p>

            <form class="d-flex justify-content-left">
              <button class="btn btn-primary btn-md my-0 p" type="submit">Add to cart
                <i class="fas fa-shopping-cart ml-1"></i>
              </button>

            </form>

          </div>
</div>
    )
}

export default BookInfo