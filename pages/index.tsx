import type { NextPage } from "next";
import { useState, Fragment } from "react";
import Head from "next/head";

const Home: NextPage = () => {

  return (
    <main className="container mx-auto p-6 text-center flex flex-col h-screen justify-center items-center">
      <Head>
        <title>tangie</title>
        <meta name="description" content="the best way to find the right marijuana products for you" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-xl">

        <h1 className="text-5xl font-display text-tangie-orange-500 mb-5">
          tangie
        </h1>

        <p className="py-4">Welcome to Tangie, the best way to find the right marijuana products for you.</p>

        <div className="py-2">
          <a className="block bg-tangie-mint-500 text-black font-bold py-5 px-2 rounded-full">
            Log in
          </a>
        </div>

        <div className="py-2">
          <a className="block text-black font-bold py-5 px-2 rounded-full border-tangie-mint-500 border-4">
            Sign up
          </a>
        </div>

      </div>

    </main>
  );
};

export default Home;
