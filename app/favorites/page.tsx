"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import CinemiqLayout from "../../components/CinemiqLayout";
import CinemiqMovieCard from "../../components/CinemiqMovieCard";
import { CinemiqMovie } from "../../lib/cinemiq";

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
        <div className="py-6">
          <h1 className="text-2xl font-semibold mb-6">Your Favorites</h1>

          {favorites === null ? (
            <div className="py-20 text-center text-slate-300">Loading favorites…</div>
          ) : favorites.length === 0 ? (
            <div className="py-20 text-center text-slate-400">You have no favorites saved yet.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map((m) => (
                <div key={m.id} className="flex flex-col">
                  <CinemiqMovieCard movie={m} />

                  <div className="mt-2 flex justify-center">
                    <button
                      onClick={() => handleRemove(m.id)}
                      className="inline-block px-3 py-2 rounded-md bg-rose-600 text-white text-sm font-medium hover:bg-rose-700 transition"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CinemiqLayout>
    </>
  );
}
