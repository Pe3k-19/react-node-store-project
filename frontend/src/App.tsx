import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

type ProductItem = {
  id: number;
  name: string;
  description: string;
  tech: string[];
};

function App() {
  const [products, setProducts] = useState<ProductItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-10">
      <h1>Moje projekty 🚀</h1>

      {products.map((product) => (
        <div key={product.id} className="mb-10">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <small>{product.tech.join(", ")}</small>
        </div>
      ))}
    </div>
  );
}

export default App;
