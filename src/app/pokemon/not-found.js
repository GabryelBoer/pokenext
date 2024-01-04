import Link from "next/link";

export default function notFound() {
  return (
    <>
      <h1>404</h1>
      <p>Não encontramos este pokemon!</p>
      <Link href={"/"}>Voltar</Link>
    </>
  );
}
