import Image from "next/image";
import styles from "./page.module.css";
import Card from "@/components/Card";

async function getData() {
  const maxPokemons = 252;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const res = await fetch(`${api}?limit=${maxPokemons}`);

  if (!res.ok) {
    // notFound();
  }
  const data = await res.json();
  data.results.forEach((item, index) => {
    item.id = index + 1;
  });

  return data.results;
}

export default async function Home() {
  const pokeData = await getData();
  return (
    <>
      <div className={styles.title_container}>
        <h1 className={styles.title}>
          Poke<span>Next</span>
        </h1>
        <Image
          src={"/images/pokeball.png"}
          width={50}
          height={50}
          alt="PokeNext"
        />
      </div>
      <div className={styles.poke_container}>
        {pokeData.map((pokemon) => (
          <Card key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </>
  );
}
