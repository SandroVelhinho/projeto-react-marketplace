import { useParams } from "react-router-dom";
import { products } from "../products";

export function SeeDetails() {
  const { id } = useParams();

  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div>
      <p>{product.nome}</p>
      <p>{product.descrição}</p>
    </div>
  );
}
