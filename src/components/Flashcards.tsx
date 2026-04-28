import { useMemo, useState } from "react";
import { CATEGORIES, FLASHCARDS, type Flashcard } from "@/data/flashcards";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function Flashcards() {
  const [category, setCategory] = useState("All");
  const [deck, setDeck] = useState<Flashcard[]>(() => shuffle(FLASHCARDS));
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [review, setReview] = useState(0);

  const filtered = useMemo(
    () => (category === "All" ? deck : deck.filter((c) => c.category === category)),
    [deck, category]
  );

  const total = filtered.length;
  const done = index >= total;
  const card = filtered[index];
  const progress = total === 0 ? 0 : Math.min(index / total, 1);

  function next() {
    setFlipped(false);
    setTimeout(() => setIndex((i) => i + 1), 180);
  }

  function markCorrect() {
    setCorrect((c) => c + 1);
    next();
  }
  function markWrong() {
    setReview((r) => r + 1);
    next();
  }
  function skip() {
    next();
  }

  function reset(newDeck?: Flashcard[]) {
    setDeck(newDeck ?? shuffle(FLASHCARDS));
    setIndex(0);
    setFlipped(false);
    setCorrect(0);
    setReview(0);
  }

  function selectCategory(cat: string) {
    setCategory(cat);
    setIndex(0);
    setFlipped(false);
    setCorrect(0);
    setReview(0);
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <header className="w-full px-6 pt-5 pb-4 flex items-center justify-between border-b border-border sticky top-0 z-10 bg-background">
        <div className="font-display text-xl tracking-tight text-accent">
          flash<span className="text-foreground italic">cards</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="text-xs text-muted-foreground">
            {Math.min(index + (done ? 0 : 1), total)} / {total}
          </span>
          <div className="w-20 h-1 bg-surface-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-[width] duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </header>

      <div className="w-full overflow-x-auto flex gap-2 px-5 py-3 border-b border-border bg-background [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CATEGORIES.map((cat) => {
          const active = category === cat;
          return (
            <button
              key={cat}
              onClick={() => selectCategory(cat)}
              className={`flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium border transition-all whitespace-nowrap ${
                active
                  ? "bg-accent text-background border-accent"
                  : "bg-surface text-muted-foreground border-border hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      <main className="w-full max-w-[480px] px-5 pt-6 pb-24 flex flex-col items-center gap-5">
        {!done && card ? (
          <>
            <div className="w-full [perspective:1200px] animate-in fade-in slide-in-from-bottom-3 duration-300" key={index}>
              <div
                onClick={() => setFlipped((f) => !f)}
                className="w-full min-h-[260px] relative [transform-style:preserve-3d] transition-transform duration-[550ms] cursor-pointer"
                style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
              >
                {/* Front */}
                <div className="absolute inset-0 min-h-[260px] rounded-[20px] [backface-visibility:hidden] flex flex-col items-center justify-center p-8 border border-border bg-card-front">
                  <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground mb-5">
                    {card.direction === "es-en" ? "Spanish" : "English"}
                  </span>
                  <h2 className="font-display text-[1.6rem] text-center leading-snug">
                    {card.direction === "es-en" ? card.spanish : card.english}
                  </h2>
                  <span className="text-[11px] text-accent mt-3 opacity-80">{card.category}</span>
                  <span className="text-xs text-muted-foreground mt-4 opacity-60">
                    tap to reveal
                  </span>
                </div>
                {/* Back */}
                <div
                  className="absolute inset-0 min-h-[260px] rounded-[20px] [backface-visibility:hidden] flex flex-col items-center justify-center p-8 border border-border bg-card-back"
                  style={{ transform: "rotateY(180deg)" }}
                >
                  <span className="text-[11px] font-medium tracking-[0.1em] uppercase text-muted-foreground mb-5">
                    {card.direction === "es-en" ? "English" : "Spanish"}
                  </span>
                  <h2 className="font-display text-[1.5rem] text-center leading-snug text-accent-2">
                    {card.direction === "es-en" ? card.english : card.spanish}
                  </h2>
                  <span className="text-[11px] text-accent mt-3 opacity-80">{card.category}</span>
                  <span className="text-xs text-muted-foreground mt-4 opacity-60">
                    how did you do?
                  </span>
                </div>
              </div>
            </div>

            <div className="w-full flex gap-3">
              <button
                onClick={markWrong}
                className="flex-1 py-3.5 rounded-[14px] border text-sm font-medium transition-all active:scale-[0.97] bg-wrong/10 text-wrong border-wrong/30"
              >
                ✕ Review
              </button>
              <button
                onClick={skip}
                className="flex-[0.5] py-3.5 rounded-[14px] border border-border bg-surface text-muted-foreground text-sm transition-all active:scale-[0.97]"
              >
                →
              </button>
              <button
                onClick={markCorrect}
                className="flex-1 py-3.5 rounded-[14px] border text-sm font-medium transition-all active:scale-[0.97] bg-correct/10 text-correct border-correct/30"
              >
                ✓ Got it
              </button>
            </div>

            <div className="w-full flex gap-2.5">
              <Stat num={correct} label="correct" tone="correct" />
              <Stat num={review} label="to review" tone="wrong" />
              <Stat num={Math.max(total - index, 0)} label="remaining" tone="accent" />
            </div>

            <button
              onClick={() => reset()}
              className="w-full py-3 rounded-[14px] border border-border bg-surface text-muted-foreground text-sm transition-all active:scale-[0.98] hover:text-foreground"
            >
              ⇌ Shuffle deck
            </button>
          </>
        ) : (
          <div className="w-full text-center py-8 flex flex-col items-center gap-4 animate-in fade-in duration-300">
            <div className="text-5xl">🎉</div>
            <h2 className="font-display text-3xl">Round complete!</h2>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-[320px]">
              You got <span className="text-correct">{correct} correct</span> and marked{" "}
              <span className="text-wrong">{review}</span> to review.
              {total > 0 && (
                <> Your accuracy: {Math.round((correct / total) * 100)}%.</>
              )}
            </p>
            <button
              onClick={() => reset()}
              className="px-8 py-3.5 rounded-[14px] bg-accent text-background font-medium text-[15px] mt-2 active:opacity-85 transition-opacity"
            >
              Start again
            </button>
          </div>
        )}
      </main>
    </div>
  );
}

function Stat({
  num,
  label,
  tone,
}: {
  num: number;
  label: string;
  tone: "correct" | "wrong" | "accent";
}) {
  const color =
    tone === "correct" ? "text-correct" : tone === "wrong" ? "text-wrong" : "text-accent";
  return (
    <div className="flex-1 bg-surface border border-border rounded-[14px] py-3 px-4 text-center">
      <div className={`font-display text-2xl font-semibold ${color}`}>{num}</div>
      <div className="text-[11px] text-muted-foreground mt-0.5">{label}</div>
    </div>
  );
}
