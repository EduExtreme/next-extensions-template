import Link from "next/link";
import React from "react";
import { AnotherPage } from "./styles";

export default function Another() {
  return (
    <AnotherPage>
      <h1>Another PAGE</h1>
      <p>ESSA É A Another PAGE </p>
      <Link href="/">Back</Link>
    </AnotherPage>
  );
}
