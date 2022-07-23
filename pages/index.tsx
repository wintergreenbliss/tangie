import type { NextPage } from "next";
import Head from "next/head";

import Button from "@components/button";

const Home: NextPage = () => {
  return (
    <main className="container mx-auto p-6 text-center flex flex-col h-screen justify-center items-center">
      <Head>
        <title>tangie</title>
        <meta
          name="description"
          content="the best way to find the right marijuana products for you"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-xl">
        <h1 className="text-5xl font-display text-tangie-orange-500 mb-5">
          tangie
        </h1>

        <p className="py-4">
          Welcome to Tangie, the best way to find the right marijuana products
          for you. Kittens.
        </p>

        <div className="py-2">
          <Button link="/user">Login</Button>
        </div>

        <div className="py-2">
          <Button type="outline" link="/user">
            Sign up
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
