import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addProduct, updateProduct } from "../Actions/productActions";
import { setProduct } from "../Slices/productSlice";

const ProductFormScreen = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { product, loading } = useSelector((state) => state.products);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (id) {
      dispatch(setProduct(id));
    } else {
      setTitle("");
      setDescription("");
      setPrice("");
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (id && product?.title) {
      setTitle(product.title);
      setDescription(product.description);
      setPrice(product.price);
    }
  }, [product, id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const productData = { title, description, price };

    if (id) {
      dispatch(updateProduct({ id, productData }));
    } else {
      dispatch(addProduct(productData));
    }

    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-center mb-4">
        {id ? "Edit Product" : "Add Product"}
      </h2>

      {loading && <p className="text-center">Loading...</p>}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 border rounded mb-4"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md"
        >
          {id ? "Update Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductFormScreen;
