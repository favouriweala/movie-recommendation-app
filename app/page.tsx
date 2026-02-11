import Head from "next/head";
import CinemiqLayout from "../components/CinemiqLayout";
import CinemiqMovieCard from "../components/CinemiqMovieCard";
import { useCinemiqTrending } from "../lib/cinemiq";
import styled from "styled-components";

"use client";

// style: make grid responsive with styled-components (mobile-first)
const Section = styled.section``;

const Title = styled.h1`
  font-size: 1.25rem;
  margin-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 640px) { grid-template-columns: repeat(2, minmax(0,1fr)); }
  @media (min-width: 900px) { grid-template-columns: repeat(3, minmax(0,1fr)); }
  @media (min-width: 1200px) { grid-template-columns: repeat(4, minmax(0,1fr)); }
`;

function TrendingSection() {
  const { data, loading, error } = useCinemiqTrending();

  if (loading) {
    return (
      <div style={{ padding: "4rem 0", textAlign: "center", color: "#9fb0c8" }}>Loading trending movies…</div>
    );
  }

  if (error) {
    return (
      <div style={{ padding: "4rem 0", textAlign: "center" }}>
        <p style={{ color: "#ff7b7b" }}>Error loading trending movies: {error}</p>
      </div>
    );
  }

  const movies = data ?? [];

  return (
    <Section>
      <Title>Cinemiq – Trending Movies</Title>
      <Grid>
        {movies.map((m) => (
          <CinemiqMovieCard key={m.id} movie={m} />
        ))}
      </Grid>
    </Section>
  );
}

export default function Page() {
  return (
    <>
      <Head>
        <title>Cinemiq – Trending Movies</title>
      </Head>

      <CinemiqLayout>
        <TrendingSection />
      </CinemiqLayout>
    </>
  );
}
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.tsx file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
