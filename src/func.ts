import { Mark, Color } from "./enums";
import { Deck, Card, Joker } from "./types";

export function createDeck(): Deck {
  let deck: Deck = [];
  const marks = Object.values(Mark);
  const colors = Object.values(Color);
  for (const m of marks) {
    for (const c of colors) {
      deck.push({
        mark: m,
        color: c,
        getString() {
          return this.mark + this.color;
        },
      } as Card);
    }
  }
  const joker: Joker = {
    type: "small",
    getString() {
      return "joker";
    },
  };
  deck.push(joker);
  const Joker: Joker = {
    type: "big",
    getString() {
      return "joker";
    },
  };
  deck.push(Joker);
  return deck;
}
export function printDeck(deck: Deck) {
  let result = "\n";
  deck.forEach((card, i) => {
    result += card.getString() + "\t";
    if ((i + 1) % 6 === 0) {
      result += "\n";
    }
  });
  console.log(result);
}
