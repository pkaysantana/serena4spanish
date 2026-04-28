import { createFileRoute } from "@tanstack/react-router";
import { Flashcards } from "@/components/Flashcards";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Lexi — Spanish Flashcards" },
      {
        name: "description",
        content:
          "Learn Spanish with beautifully designed flashcards. Categories, progress tracking, and shuffle mode.",
      },
    ],
  }),
});

function Index() {
  return <Flashcards />;
}
