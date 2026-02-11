"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import CinemiqLayout from "../../components/CinemiqLayout";
import CinemiqMovieCard from "../../components/CinemiqMovieCard";
import { CinemiqMovie } from "../../lib/cinemiq";

// style: favorites page converted to styled-components
const Wrapper = styled.div`
  padding: 16px 0;
`;

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

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const RemoveButton = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  background: linear-gradient(90deg,#ef4444,#be123c);
  color: white;
  font-weight: 700;
  border: none;
  cursor: pointer;
  transition: transform 160ms ease, box-shadow 160ms ease;

  &:hover { transform: translateY(-3px); box-shadow: 0 12px 30px rgba(190,18,60,0.12); }
`;

function readFavorites(): CinemiqMovie[] {
  try {
    const raw = localStorage.getItem("cinemiqFavorites");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as CinemiqMovie[];
  } catch {
    return [];
  }
}

function writeFavorites(items: CinemiqMovie[]) {
  try {
    localStorage.setItem("cinemiqFavorites", JSON.stringify(items));
  } catch {
    // ignore
  }
}

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState<CinemiqMovie[] | null>(null);

  useEffect(() => {
    setFavorites(readFavorites());
  }, []);

  const handleRemove = (id: number) => {
    const next = (favorites ?? []).filter((m) => m.id !== id);
    setFavorites(next);
    writeFavorites(next);
  };

  return (
    <>
      <Head>
        <title>Cinemiq — Favorites</title>
      </Head>

      <CinemiqLayout>
        <Wrapper>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Title>Your Favorites</Title>

            {favorites === null ? (
              <div style={{ padding: "4rem 0", textAlign: "center", color: "#9fb0c8" }}>Loading favorites…</div>
            ) : favorites.length === 0 ? (
              <div style={{ padding: "4rem 0", textAlign: "center", color: "#9fb0c8" }}>You have no favorites saved yet.</div>
            ) : (
              <Grid>
                {favorites.map((m) => (
                  <CardWrap key={m.id}>
                    <CinemiqMovieCard movie={m} />
                    <RemoveButton onClick={() => handleRemove(m.id)}>Remove</RemoveButton>
                  </CardWrap>
                ))}
              </Grid>
            )}
          </div>
        </Wrapper>
      </CinemiqLayout>
    </>
  );
}
