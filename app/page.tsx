"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/results");
  };

  const handleOmakase = () => {
    router.push("/results");
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-8">
      <div className="flex flex-col items-center space-y-8 max-w-2xl w-full">
        {/* Kanji character */}
        <div className="text-8xl font-bold text-primary mb-4">愛</div>

        {/* Main title */}
        <h1 className="text-6xl font-bold text-center text-foreground mb-8">
          AI Anime Recommender
        </h1>

        {/* Search form */}
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search for anime recommendations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-12 text-lg px-4 rounded-full border-2 border-border hover:border-primary/50 focus:border-primary shadow-lg"
            />
          </div>

          <div className="flex justify-center space-x-4">
            <Button
              type="submit"
              size="lg"
              className="px-8 py-3 text-base rounded-md"
            >
              Find Recommendations
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleOmakase}
              className="px-8 py-3 text-base rounded-md"
            >
              Omakase!
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
