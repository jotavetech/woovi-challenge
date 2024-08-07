"use client";

import { MethodList, Container } from "../components";

import paymentOptionsData from "../data/payment-options.json";

export default function Home() {
  return (
    <main>
      <Container title="João, como você quer pagar?">
        <MethodList paymentOptions={paymentOptionsData} />
      </Container>
    </main>
  );
}
