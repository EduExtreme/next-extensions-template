import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { HomeStyles } from "./styles";

export default function Home() {
  return (
    <HomeStyles>
      <h1>HOME PAGE</h1>
      <p>ESSA É A HOME PAGE </p>
      <Link href="/another-page">Click</Link>
    </HomeStyles>
  );
}
