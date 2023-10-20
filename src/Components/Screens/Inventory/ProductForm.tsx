import React, { useState } from 'react';

interface ProductFormProps {
  selectedType: string | null;
  onAddProduct: (newProduct: Product) => void;
}

interface Product {
  id: number;
  name: string;
  price: number;
  // Add more product properties here as needed
}

const ProductForm: React.FC<ProductFormProps> = ({ selectedType, onAddProduct }) => {
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0, // Generate a unique ID for the new product
    name: '',
    price: 0,
    // Initialize other product properties as needed
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = () => {
    // Validate the new product data here if needed

    // Call the onAddProduct callback to add the new product
    onAddProduct(newProduct);

    // Reset the form fields
    setNewProduct({
      id: 0, // Generate a new unique ID
      name: '',
      price: 0,
      // Reset other product properties as needed
    });
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">
        Add New Product to {selectedType || 'Item Type'}
      </h2>
      <div className="flex space-x-2">
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border p-2 rounded w-1/2"
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
          placeholder="Price"
          className="border p-2 rounded w-1/4"
        />
      </div>
      <button
        onClick={handleAddProduct}
        className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductForm;
