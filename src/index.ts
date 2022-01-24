//poker

type Deck = NormalCard[];
enum Color {
    heart = '♥',
    spade = '♠',
    club = '♣',
    diamond = '♦'
}

enum Mark {
    A = 'A',
    Two = '2',
    Three = '3',
    Four = '4',
    Five = '5',
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
    Ten = '10',
    Eleven = 'J',
    Twelve = 'Q',
    Thirteen = 'K'
}

type NormalCard = {
    mark: Mark;
    color: Color;
};

function createDeck(): Deck {
    let deck: Deck = [];
    const marks = Object.values(Mark);
    const colors = Object.values(Color);
    for (const m of marks) {
        for (const c of colors) {
            deck.push({
                mark: m,
                color: c
            });
        }
    }
    return deck;
}

function printDeck(deck: Deck) {
    let result = '\n';
    deck.forEach((card, i) => {
        let str = card.color + card.mark;
        result += str + '\t';
        if ((i + 1) % 4 === 0) {
            result += '\n';
        }
    });
    console.log(result);
}

const deck = createDeck();
printDeck(deck);
