import Link from "next/link";

export default function notFound() {
  return (
    <>
      <h1>404</h1>
      <p>Parece que esta página não existe!</p>
      <Link href={"/"}>Voltar</Link>
    </>
  );
}
