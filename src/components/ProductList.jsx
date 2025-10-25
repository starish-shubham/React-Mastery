import React from 'react'

const ProductList = () => {
    const products = [
        { id: 1, name: "Phone", price: "$699" },
        { id: 2, name: "Laptop", price: "$1200" },
        { id: 3, name: "Headphones", price: "$199" },
    ];

  return (
    <div>
    {products.map(({id, name, price}) => (
        <div key={id}>
            <h3>Product Name : {name}</h3>
            <h3>Product Price : {price}</h3>
        </div>
    ))}
      
    </div>
  )
}

export default ProductList
