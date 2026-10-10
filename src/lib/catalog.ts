export const AFFILIATE_TAG = "mrspock-20";

export type Aisle = "wallet" | "read" | "steel" | "node";

export type Product = {
  id: string;
  aisle: Aisle;
  name: string;
  maker: string;
  blurb: string;
  why: string;
  bestFor: string;
  facts: string[];
  watchout?: string;
  /** Present when we have a stable product page. Search is always the fallback. */
  asin?: string;
  search: string;
  badge?: string;
  compare?: {
    screen: string;
    phone: string;
    backup: string;
    source: string;
  };
};

export type Stack = {
  id: string;
  name: string;
  kicker: string;
  summary: string;
  image: string;
  imageAlt: string;
  productIds: string[];
};

export const aisleMeta: Record<Aisle, { label: string; line: string; image: string; alt: string }> = {
  wallet: {
    label: "Wallets",
    line: "A screen you control, for keys that should not live on an exchange.",
    image: "/images/wallets.jpg",
    alt: "Two small unbranded metal devices on linen.",
  },
  read: {
    label: "Reads",
    line: "Five books. The rest of the shelf can wait.",
    image: "/images/books.jpg",
    alt: "A stack of unbranded clothbound books tied with an orange ribbon.",
  },
  steel: {
    label: "Steel",
    line: "Paper burns. A photo of your words will eventually upload itself.",
    image: "/images/steel.jpg",
    alt: "A blank brushed-steel plate and a brass stylus on walnut.",
  },
  node: {
    label: "Nodes",
    line: "Verify the chain yourself. A node does not mine, and it will not pay you.",
    image: "/images/node.jpg",
    alt: "A small single-board computer and a portable drive on a wooden shelf.",
  },
};

export const products: Product[] = [
  {
    id: "trezor-safe-3",
    aisle: "wallet",
    name: "Trezor Safe 3",
    maker: "Trezor",
    badge: "Editor's default",
    blurb: "Cosmic Black. Open-source wallet software, a secure element, and a screen that fits in a pocket.",
    why: "If you set this up at a computer, this is the one we'd buy with our own money.",
    bestFor: "A desk, a laptop, and someone who wants the quieter security story.",
    facts: [
      "USB-C. No battery to find dead in a drawer in two years.",
      "You confirm the address on the device, not only on the computer.",
      "Trezor Suite is the app. Bitcoin is a first-class citizen there.",
    ],
    watchout: "It is not the smooth Bluetooth phone wallet. If you live on a phone, look at the Nano X.",
    asin: "B0CLNZ5FKN",
    search: "Trezor Safe 3 Cosmic Black",
    compare: {
      screen: "OLED on the device",
      phone: "USB. Desktop is the real path.",
      backup: "Recovery phrase, then steel",
      source: "Open-source software",
    },
  },
  {
    id: "trezor-gold",
    aisle: "wallet",
    name: "Trezor Safe 3, Solar Gold",
    maker: "Trezor",
    badge: "Same device, gift color",
    blurb: "The Safe 3 in gold. Nothing else changes except how it looks in a box.",
    why: "Buy the black one for yourself. Buy this one when the wrapping matters.",
    bestFor: "A serious gift that is still the editor's default wallet.",
    facts: [
      "Identical security model to the Cosmic Black Safe 3.",
      "Still USB-C, still a real screen.",
      "Put a setup note in the box. Unopened hardware helps nobody.",
    ],
    asin: "B0CLNYS7TB",
    search: "Trezor Safe 3 Solar Gold",
  },
  {
    id: "ledger-s-plus",
    aisle: "wallet",
    name: "Ledger Nano S Plus",
    maker: "Ledger",
    blurb: "The compact Ledger. A screen, a secure element, and a cable. No Bluetooth.",
    why: "The value pick if you already sit at a computer and you want the other bestseller.",
    bestFor: "Desktop or Android. Not an iPhone.",
    facts: [
      "USB only. There is no battery.",
      "Works with the Ledger wallet app on desktop and Android.",
      "Comes in several colors. This link is the gold finish.",
    ],
    watchout: "No iPhone app. If your only computer is an iPhone, get the Nano X instead.",
    asin: "B0DJTTGHTF",
    search: "Ledger Nano S Plus",
    compare: {
      screen: "OLED on the device",
      phone: "Android or a computer. Not iPhone.",
      backup: "Recovery phrase, then steel",
      source: "Ledger OS is not fully open",
    },
  },
  {
    id: "ledger-nano-x",
    aisle: "wallet",
    name: "Ledger Nano X",
    maker: "Ledger",
    badge: "Best with a phone",
    blurb: "The Bluetooth Ledger. Same idea as the S Plus, plus a battery and an iPhone.",
    why: "Buy this if you will actually move coins from your phone. Convenience is a security feature when the alternative is leaving coins on an exchange.",
    bestFor: "iPhone or Android, and people who travel.",
    facts: [
      "Bluetooth and USB-C. You can refuse Bluetooth and use the cable.",
      "Screen on the device, so you can check the address before you send.",
      "A battery means it needs a charge. Don't lose it in a drawer for three years and expect a miracle.",
    ],
    watchout: "Some people won't use Bluetooth at all. They should buy the Trezor and a cable.",
    asin: "B07M6R4NK3",
    search: "Ledger Nano X Bluetooth",
    compare: {
      screen: "OLED on the device",
      phone: "iPhone, Android, and desktop",
      backup: "Recovery phrase, then steel",
      source: "Ledger OS is not fully open",
    },
  },
  {
    id: "tangem-btc",
    aisle: "wallet",
    name: "Tangem Bitcoin collection",
    maker: "Tangem",
    badge: "Simplest gift",
    blurb: "NFC cards. Tap the phone. The backup is another card, not a sentence you have to engrave.",
    why: "The right object when the person will not babysit a 24-word phrase.",
    bestFor: "Gifts, and people who want cold storage without a gadget that looks like a USB stick.",
    facts: [
      "No cable and no battery. The phone does the talking, over NFC.",
      "Seedless backup is the default: a second card shares the key.",
      "The Bitcoin collection is the one that looks like a gift, not a circuit board.",
    ],
    watchout:
      "You approve on the phone screen. There is no separate wallet display. If that tradeoff bothers you, buy a Trezor or a Ledger.",
    asin: "B0DXPKL46X",
    search: "Tangem Bitcoin wallet",
    compare: {
      screen: "Phone only",
      phone: "NFC tap. That's the whole interface.",
      backup: "Second card, seedless by default",
      source: "Card firmware, audited chip",
    },
  },
  {
    id: "inventing-bitcoin",
    aisle: "read",
    name: "Inventing Bitcoin",
    maker: "Yan Pritzker",
    badge: "Read this first",
    blurb: "A short, plain explanation of how Bitcoin was invented. An afternoon, not a semester.",
    why: "Hand this to anyone who says 'I still don't get what the coins actually are.'",
    bestFor: "A first book, including the person you're gifting a wallet to.",
    facts: [
      "Short on purpose. You will finish it.",
      "Technology first, not a price prediction.",
      "The right book to pair with a hardware wallet.",
    ],
    asin: "1794326316",
    search: "Inventing Bitcoin Yan Pritzker",
  },
  {
    id: "bitcoin-standard",
    aisle: "read",
    name: "The Bitcoin Standard",
    maker: "Saifedean Ammous",
    badge: "The monetary argument",
    blurb: "A history of money that lands on Bitcoin. Opinionated, widely read, and not a how-to manual.",
    why: "Buy it when the question is 'why would anyone hold this for ten years,' not 'which button do I press.'",
    bestFor: "Curious skeptics, and gifts for people who already read economics.",
    facts: [
      "Hardcover from Wiley. This is the full book, not a summary.",
      "Austrian-school economics. He is arguing, not surveying.",
      "Pair it with Inventing Bitcoin if the protocol itself is still fuzzy.",
    ],
    watchout: "It will not teach you to send a transaction. Don't buy it as an instruction manual.",
    asin: "1119473861",
    search: "The Bitcoin Standard Ammous hardcover",
  },
  {
    id: "blocksize-war",
    aisle: "read",
    name: "The Blocksize War",
    maker: "Jonathan Bier",
    blurb: "The 2015–2017 fight over who gets to change Bitcoin's rules. A history, told cleanly.",
    why: "The book that explains why 'just increase the block size' was never a small argument.",
    bestFor: "Someone who already owns coins and wants the political story.",
    facts: [
      "Narrative history, not a textbook.",
      "You do not need to code to follow it.",
      "Read it after The Bitcoin Standard, not before Inventing Bitcoin.",
    ],
    asin: "B08YQMC2WM",
    search: "The Blocksize War Jonathan Bier",
  },
  {
    id: "mastering-bitcoin",
    aisle: "read",
    name: "Mastering Bitcoin",
    maker: "Antonopoulos & Harding",
    badge: "The technical manual",
    blurb: "The third edition. How transactions, scripts, and the peer-to-peer network actually work.",
    why: "Buy this when you're ready to stop repeating metaphors and look at the machine.",
    bestFor: "Builders, node runners, and anyone who writes software.",
    facts: [
      "O'Reilly, third edition, with David Harding.",
      "The standard reference serious developers still hand around.",
      "Not a beginner book. Start with Inventing Bitcoin.",
    ],
    asin: "1098150082",
    search: "Mastering Bitcoin 3rd edition Antonopoulos Harding",
  },
  {
    id: "programming-bitcoin",
    aisle: "read",
    name: "Programming Bitcoin",
    maker: "Jimmy Song",
    blurb: "Build the pieces of Bitcoin in Python, from keys to transactions.",
    why: "The book for people who only believe a system after they've typed it.",
    bestFor: "Programmers. Everyone else will bounce off chapter two, and that's fine.",
    facts: [
      "Exercises. You write a library as you go.",
      "Python 3. Comfort with code is assumed.",
      "Read Mastering Bitcoin alongside it if the map is still blurry.",
    ],
    asin: "1492031496",
    search: "Programming Bitcoin Jimmy Song",
  },
  {
    id: "digital-gold",
    aisle: "read",
    name: "Digital Gold",
    maker: "Nathaniel Popper",
    blurb: "The early-years story: the misfits, the exchanges, the heists, the argument.",
    why: "Buy it when you want the human history, not the monetary theory.",
    bestFor: "A long flight, and people who like nonfiction more than white papers.",
    facts: [
      "Reported narrative from a Wall Street Journal writer.",
      "History of the scene, not a setup guide.",
      "A good second gift next to a wallet, if they already know the basics.",
    ],
    asin: "0062362496",
    search: "Digital Gold Nathaniel Popper",
  },
  {
    id: "codesteel",
    aisle: "steel",
    name: "Codesteel phrase plates",
    maker: "Codesteel",
    badge: "Inexpensive insurance",
    blurb: "Two stainless plates for a 24-word phrase. Not heirloom metal. Better than a sticky note.",
    why: "The smallest spend that gets your backup out of a notebook.",
    bestFor: "A first steel backup while you decide whether to buy a heavier one.",
    facts: [
      "304 stainless. You stamp or engrave. Do it at home.",
      "Two plates means one can live somewhere else.",
      "Ships as a simple kit. Don't expect a Cryptosteel.",
    ],
    watchout: "Never photograph the finished plate. The photo is a copy you do not control.",
    asin: "B0DZHV9RN3",
    search: "Codesteel metal seed phrase plate",
  },
  {
    id: "steel-tiles",
    aisle: "steel",
    name: "Steel tile backup",
    maker: "TANGXIA",
    badge: "The one we'd actually stamp",
    blurb: "Letter tiles in a steel body, for the first four letters of each word. You can fix a mistake.",
    why: "Stamping a flat plate by hand is how people transpose word nine and ruin a backup. Tiles are slower and harder to botch.",
    bestFor: "Anyone protecting more than a rounding error.",
    facts: [
      "BIP39 friendly: four letters identify the word.",
      "Tiles can be corrected. A bad punch on a solid plate cannot.",
      "This is not made by Cryptosteel. It's the same idea, at an Amazon price.",
    ],
    watchout: "Do the stamping offline, in private. Then put it somewhere a house fire doesn't choose for you.",
    asin: "B0B1JLVQB3",
    search: "steel tile crypto seed backup 24 words",
  },
  {
    id: "cryptosteel",
    aisle: "steel",
    name: "Cryptosteel Capsule",
    maker: "Cryptosteel",
    badge: "Opens a search",
    blurb: "The original capsule: tiles on a rod, inside a sealed steel tube.",
    why: "If the amount is serious, stop shopping the bargain bin and buy the object people have used for a decade.",
    bestFor: "A long-term backup you're willing to pay real money for.",
    facts: [
      "Amazon's exact listing moves. This button searches the live one.",
      "Look for a Capsule sold by a recognizable seller, not a no-name clone.",
      "Still not a wallet. It stores the words. The device stores the keys.",
    ],
    search: "Cryptosteel Capsule Solo seed phrase",
  },
  {
    id: "pi-5",
    aisle: "node",
    name: "Raspberry Pi 5",
    maker: "Raspberry Pi",
    badge: "Opens a search",
    blurb: "The small computer a Bitcoin node actually fits on. Get the 8GB board.",
    why: "A node is how you stop asking a company what the chain says.",
    bestFor: "Someone who wants their own copy of the blockchain at home.",
    facts: [
      "Prefer 8GB over 4GB.",
      "The official 27W USB-C supply is not optional. Weak power corrupts disks.",
      "A node verifies. It does not mine and it does not earn sats.",
    ],
    search: "Raspberry Pi 5 8GB",
  },
  {
    id: "pi-psu",
    aisle: "node",
    name: "Raspberry Pi 27W power supply",
    maker: "Raspberry Pi",
    badge: "Opens a search",
    blurb: "The official USB-C supply. Phone chargers are why people's nodes die on a Tuesday.",
    why: "The cheapest way to not corrupt the drive that holds the chain.",
    bestFor: "Anyone buying a Pi 5 in the same cart.",
    facts: [
      "27W, USB-C, made for the Pi 5.",
      "Buy it with the board. Don't 'find a charger later.'",
      "This opens Amazon search so you get a listing that's actually in stock.",
    ],
    search: "Raspberry Pi 27W USB-C power supply",
  },
  {
    id: "ssd",
    aisle: "node",
    name: "2TB portable SSD",
    maker: "Samsung T7 or equivalent",
    badge: "Opens a search",
    blurb: "The blockchain does not fit comfortably on a tiny microSD card. Give it a real drive.",
    why: "A 2TB SSD is the difference between a node you forget about and a node you rebuild every month.",
    bestFor: "The Pi on the shelf above this one.",
    facts: [
      "2TB is the sane size. 1TB gets tight as the chain grows.",
      "Portable SSD, USB. The Samsung T7 is the boring reliable pick.",
      "Search opens the live listings. Pick a drive sold by Amazon or the brand.",
    ],
    search: "Samsung T7 2TB portable SSD",
  },
];

export const stacks: Stack[] = [
  {
    id: "off-exchange",
    name: "Off the exchange",
    kicker: "Start here",
    summary:
      "A screen to sign on, an inexpensive steel plate so the notebook isn't your only copy, and a two-hour book so you know what the device is for.",
    image: "/images/wallets.jpg",
    imageAlt: "Two small metal devices on linen, an aisle still rather than a product shot.",
    productIds: ["trezor-safe-3", "codesteel", "inventing-bitcoin"],
  },
  {
    id: "gift",
    name: "The un-mug",
    kicker: "For someone else",
    summary:
      "A Tangem card they can tap, and the book that makes the gift make sense a year from now. No logo tee. No novelty miner.",
    image: "/images/gift.jpg",
    imageAlt: "A kraft gift box with an orange wax seal and a blank metal card.",
    productIds: ["tangem-btc", "bitcoin-standard"],
  },
  {
    id: "phone",
    name: "Lives on a phone",
    kicker: "iPhone or Android",
    summary:
      "Ledger's Nano X talks to a phone and still shows you the address on its own screen. Tiles for the words. A short book in the same box.",
    image: "/images/hero.jpg",
    imageAlt: "A desk with an open notebook, a small metal device, and a blank steel card.",
    productIds: ["ledger-nano-x", "steel-tiles", "inventing-bitcoin"],
  },
];

const byId = new Map(products.map((product) => [product.id, product]));

export function getProduct(id: string): Product {
  const product = byId.get(id);
  if (!product) throw new Error(`Unknown product ${id}`);
  return product;
}

export function productsByIds(ids: string[]): Product[] {
  return ids.map((id) => getProduct(id));
}

export function productUrl(asin: string): string {
  const url = new URL(`https://www.amazon.com/dp/${asin}`);
  url.searchParams.set("tag", AFFILIATE_TAG);
  return url.toString();
}

export function searchUrl(query: string): string {
  const url = new URL("https://www.amazon.com/s");
  url.searchParams.set("k", query);
  url.searchParams.set("tag", AFFILIATE_TAG);
  return url.toString();
}

export function offerUrl(product: Product): string {
  return product.asin ? productUrl(product.asin) : searchUrl(product.search);
}

export function cartUrl(asins: string[]): string {
  const url = new URL("https://www.amazon.com/gp/aws/cart/add.html");
  asins.forEach((asin, index) => {
    const n = index + 1;
    url.searchParams.set(`ASIN.${n}`, asin);
    url.searchParams.set(`Quantity.${n}`, "1");
  });
  url.searchParams.set("tag", AFFILIATE_TAG);
  return url.toString();
}

export function asinsIn(list: Product[]): string[] {
  return list.flatMap((product) => (product.asin ? [product.asin] : []));
}

export type Answers = {
  job: "store" | "learn" | "gift" | "node";
  device: "iphone" | "android" | "laptop" | "simple";
  backup: "steel" | "card" | "minimum";
  reading: "afternoon" | "history" | "code" | "skip";
};

export type Recommendation = {
  title: string;
  lede: string;
  ids: string[];
  alt?: { id: string; reason: string };
};

function uniq(ids: Array<string | null | undefined>): string[] {
  const out: string[] = [];
  for (const id of ids) {
    if (!id || out.includes(id)) continue;
    out.push(id);
  }
  return out;
}

function walletFor(answers: Answers): { id: string; alt: Recommendation["alt"] } {
  if (answers.backup === "card" || answers.device === "simple") {
    return {
      id: "tangem-btc",
      alt: {
        id: "trezor-safe-3",
        reason: "Want the address checked on the device, not on your phone? Take the Trezor instead.",
      },
    };
  }
  if (answers.device === "iphone" || answers.device === "android") {
    return {
      id: "ledger-nano-x",
      alt: {
        id: "trezor-safe-3",
        reason: "Rather skip Bluetooth? The Trezor Safe 3 stays on a USB cable. It's the one we'd hand a desktop user.",
      },
    };
  }
  return {
    id: "trezor-safe-3",
    alt: {
      id: "ledger-s-plus",
      reason: "The other bestseller at this level is the Ledger Nano S Plus. It has no iPhone app.",
    },
  };
}

function bookFor(answers: Answers): string | null {
  if (answers.reading === "afternoon") return "inventing-bitcoin";
  if (answers.reading === "history") return "bitcoin-standard";
  if (answers.reading === "code") {
    return answers.job === "learn" ? "programming-bitcoin" : "mastering-bitcoin";
  }
  if (answers.job === "learn" || answers.job === "gift") return "inventing-bitcoin";
  return null;
}

export function recommend(answers: Answers): Recommendation {
  const wallet = walletFor(answers);
  const book = bookFor(answers);
  const steel =
    answers.backup === "steel"
      ? "steel-tiles"
      : answers.backup === "minimum" && wallet.id !== "tangem-btc"
        ? "codesteel"
        : null;

  if (answers.job === "node") {
    return {
      title: "A node, not a miner.",
      lede: "A node checks the chain for you. It does not mine and it will not pay you. Mastering Bitcoin explains the machine. The Pi and a 2TB SSD are the hardware. Also buy the official 27W supply — it's on the node aisle — because a phone charger is how drives die.",
      ids: uniq(["mastering-bitcoin", wallet.id, "pi-5", "ssd"]).slice(0, 4),
      alt: wallet.alt,
    };
  }

  if (answers.job === "learn") {
    const second =
      answers.reading === "history"
        ? "blocksize-war"
        : answers.reading === "code"
          ? "mastering-bitcoin"
          : "bitcoin-standard";
    return {
      title: "Read this before you buy more.",
      lede: "Two books, in the order we'd actually hand them over, and one device for the day the reading turns into holding. Set the device up before you fund it.",
      ids: uniq([book, second, wallet.id, steel]).slice(0, 4),
      alt: wallet.alt,
    };
  }

  if (answers.job === "gift") {
    const giftWallet = answers.device === "laptop" && answers.backup !== "card" ? "trezor-gold" : wallet.id;
    return {
      title: "A gift that still matters in a year.",
      lede: "Skip the mug. Give a way to hold coins and a book that respects their intelligence. Write on the card: set it up before you send anything to it.",
      ids: uniq([giftWallet, book, steel]).slice(0, 3),
      alt:
        giftWallet === "tangem-btc"
          ? wallet.alt
          : {
              id: "tangem-btc",
              reason: "If they'd lose a 24-word phrase, the Tangem card is the kinder gift.",
            },
    };
  }

  return {
    title: "Get it off the exchange.",
    lede: "Buy the device first. Write the recovery words onto steel before you send a single coin. Move a small test, confirm it arrived, then move the rest. An exchange balance is their database.",
    ids: uniq([wallet.id, steel, book ?? "inventing-bitcoin"]).slice(0, 3),
    alt: wallet.alt,
  };
}
