import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ProductRow, StackActions } from "@/components/product-row";
import { AmazonLink, btnClass } from "@/components/ui";
import {
  getProduct,
  offerUrl,
  productsByIds,
  recommend,
  type Answers,
} from "@/lib/catalog";
import { useShortlist } from "@/lib/shortlist";

export const Route = createFileRoute("/guide")({
  head: () => ({
    meta: [{ title: "Build a stack — Aisle 21" }],
  }),
  component: GuidePage,
});

type StepId = keyof Answers;

const STEPS: {
  id: StepId;
  kicker: string;
  prompt: string;
  options: { value: Answers[StepId]; label: string; detail: string }[];
}[] = [
  {
    id: "job",
    kicker: "01",
    prompt: "What are you trying to do this week?",
    options: [
      {
        value: "store",
        label: "Get coins off an exchange",
        detail: "You already hold something, or you're about to, and you don't want it in their database.",
      },
      {
        value: "learn",
        label: "Understand it before I buy more",
        detail: "Books first. A device only so the reading has somewhere to land.",
      },
      {
        value: "gift",
        label: "Give a gift that isn't a mug",
        detail: "Something they'll still be glad to own after the novelty is gone.",
      },
      {
        value: "node",
        label: "Run my own node",
        detail: "Verify the chain at home. Not a miner. Not a paycheck.",
      },
    ],
  },
  {
    id: "device",
    kicker: "02",
    prompt: "What will you actually use?",
    options: [
      { value: "iphone", label: "An iPhone", detail: "If it doesn't work on iOS, you won't withdraw." },
      { value: "android", label: "An Android phone", detail: "Bluetooth and NFC are both realistic." },
      { value: "laptop", label: "A laptop, with a cable", detail: "The calm path. Our default recommendation lives here." },
      { value: "simple", label: "The simplest possible thing", detail: "No phrase to engrave if we can help it." },
    ],
  },
  {
    id: "backup",
    kicker: "03",
    prompt: "How do you want the backup to work?",
    options: [
      {
        value: "steel",
        label: "I'll stamp steel",
        detail: "Do it once, properly, somewhere private.",
      },
      {
        value: "card",
        label: "A second card is enough",
        detail: "Tangem's model. Kinder for gifts and for people who will lose paper.",
      },
      {
        value: "minimum",
        label: "Just the minimum that isn't a sticky note",
        detail: "A cheap plate beats a notebook. You can upgrade the metal later.",
      },
    ],
  },
  {
    id: "reading",
    kicker: "04",
    prompt: "How deep should the reading go?",
    options: [
      { value: "afternoon", label: "One afternoon", detail: "Inventing Bitcoin. Short, and you'll finish it." },
      { value: "history", label: "The monetary argument", detail: "The Bitcoin Standard, then the blocksize fight." },
      { value: "code", label: "Show me the machine", detail: "Mastering Bitcoin, or Programming Bitcoin if you write code." },
      { value: "skip", label: "Skip the books", detail: "Fine. We'll only add one if the rest of your answers demand it." },
    ],
  },
];

function GuidePage() {
  const [step, setStep] = useState(0);
  const [draft, setDraft] = useState<Partial<Answers>>({});
  const [done, setDone] = useState(false);
  const addMany = useShortlist((state) => state.addMany);
  const [savedNote, setSavedNote] = useState(false);

  function choose(id: StepId, value: Answers[StepId]) {
    const next = { ...draft, [id]: value };
    setDraft(next);
    if (step === STEPS.length - 1) {
      setDone(true);
      return;
    }
    setStep(step + 1);
  }

  function restart() {
    setDraft({});
    setStep(0);
    setDone(false);
    setSavedNote(false);
  }

  if (done && isComplete(draft)) {
    const result = recommend(draft);
    const pieces = productsByIds(result.ids);
    const alt = result.alt ? getProduct(result.alt.id) : null;
    return (
      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <p className="text-sm font-medium text-orange">Your stack</p>
        <h1 className="mt-2 max-w-3xl font-display text-4xl text-ink sm:text-5xl">{result.title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{result.lede}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <StackActions products={pieces} label="Add the set to your Amazon cart" />
        </div>
        <div className="mt-2">
          <button
            type="button"
            className={btnClass("ghost")}
            onClick={() => {
              addMany(result.ids);
              setSavedNote(true);
            }}
          >
            {savedNote ? "Saved on this device" : "Save the set here"}
          </button>
        </div>
        <div className="mt-4">
          {pieces.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </div>
        {alt && result.alt ? (
          <aside className="mt-8 border border-line bg-card p-5">
            <p className="text-sm font-medium text-orange">If that pick is wrong for you</p>
            <h2 className="mt-1 font-display text-2xl text-ink">{alt.name}</h2>
            <p className="mt-2 text-muted">{result.alt.reason}</p>
            <div className="mt-4">
              <AmazonLink href={offerUrl(alt)}>See {alt.name} on Amazon</AmazonLink>
            </div>
          </aside>
        ) : null}
        <button type="button" onClick={restart} className={`${btnClass("ghost")} mt-8`}>
          Start over
        </button>
      </main>
    );
  }

  const current = STEPS[step];
  if (!current) return null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <p className="text-sm font-medium text-orange">
        Guide {current.kicker}
        <span className="text-muted"> / 04</span>
      </p>
      <h1 className="mt-2 font-display text-4xl text-ink">{current.prompt}</h1>
      <div className="mt-8 grid gap-3">
        {current.options.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => choose(current.id, option.value)}
            className="border border-line bg-card p-5 text-left hover:border-ink"
          >
            <span className="block font-medium text-ink">{option.label}</span>
            <span className="mt-1 block text-sm text-muted">{option.detail}</span>
          </button>
        ))}
      </div>
      {step > 0 ? (
        <button
          type="button"
          onClick={() => setStep(step - 1)}
          className="mt-6 inline-flex min-h-11 items-center text-sm text-ink underline"
        >
          Back
        </button>
      ) : null}
    </main>
  );
}

function isComplete(draft: Partial<Answers>): draft is Answers {
  return Boolean(draft.job && draft.device && draft.backup && draft.reading);
}
