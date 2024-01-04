import { notFound } from "next/navigation";

import styles from "./Pokemon.module.css";
import Image from "next/image";

const getData = async (id) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  if (!res.ok) {
    notFound();
  }
  const data = await res.json();
  return data;
};

export default async function Pokemon({ params: { pokemonId } }) {
  const pokemonData = await getData(pokemonId);
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemonData.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`}
        width={200}
        height={200}
        alt={pokemonData.name}
      />
      <div>
        <h3>
          Número:
          <p>#{pokemonData.id}</p>
        </h3>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
          {pokemonData.types.map((item, index) => (
            <span
              key={index}
              className={`${styles.type} ${styles["type_" + item.type.name]}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura:</h4>
          <p>{pokemonData.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso:</h4>
          <p>{pokemonData.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
