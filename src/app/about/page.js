import Image from "next/image";

import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet
        fringilla imperdiet. Nullam id nunc at sem elementum commodo. Maecenas
        sed luctus lacus. Morbi ut mollis ipsum. Praesent nec ultrices est.
        Integer rhoncus, ex eu sollicitudin commodo, est tortor accumsan diam,
        quis suscipit nisl sem sit amet nibh. Vivamus nec quam maximus, mollis
        justo id, ullamcorper dolor. Morbi sit amet tempus nunc. Praesent at
        rhoncus neque, volutpat hendrerit dui.
      </p>
      <Image src={"/images/charizard.png"} height={300} width={300} alt="Charizard"/>
    </div>
  );
}
