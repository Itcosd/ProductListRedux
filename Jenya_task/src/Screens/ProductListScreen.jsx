import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../Actions/productActions";
import { Link } from "react-router-dom";
import { deleteProduct } from "../Slices/productSlice";

const ProductListScreen = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const { userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      dispatch(deleteProduct(id));
    }
  };

  return (
    <div className="w-2/3 mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-4">Product List</h2>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {userInfo && (
        <Link
          to="/add"
          className="block mb-4 w-full bg-green-500 text-white py-2 rounded-md text-center"
        >
          Add Product
        </Link>
      )}

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">Title</th>
            <th className="border border-gray-300 p-2">Price</th>
            {userInfo && (
              <th className="border border-gray-300 p-2">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id} className="text-center">
              <td className="border border-gray-300 p-2">
                <div>{product.title}</div>
              </td>
              <td className="border border-gray-300 p-2">${product.price}</td>
              {userInfo && (
                <td className="border border-gray-300 p-2">
                  <Link
                    to={`/edit/${product.id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md mx-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md mx-1"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductListScreen;
