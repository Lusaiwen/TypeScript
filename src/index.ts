//poker

type Deck = NormalCard[];
type Color = '♥' | '♠' | '♣' | '♦';
type NormalCard = {
    mark: number;
    color: Color;
};

function createDeck(): Deck {
    let deck: Deck = [];
    for (let i = 1; i <= 13; i++) {
        deck.push({
            color: '♠',
            mark: i
        });
        deck.push({
            color: '♣',
            mark: i
        });
        deck.push({
            color: '♥',
            mark: i
        });
        deck.push({
            color: '♦',
            mark: i
        });
    }
    return deck;
}

function printDeck(deck: Deck) {
    let result = '\n';
    deck.forEach((card, i) => {
        let str = card.color;
        if (card.mark <= 10) {
            str += card.mark;
        }
        if (card.mark === 11) {
            str += 'J';
        }
        if (card.mark === 12) {
            str += 'Q';
        }
        if (card.mark === 13) {
            str += 'K';
        }
        result += str + '\t';
        if ((i + 1) % 4 === 0) {
            result += '\n';
        }
    });
    console.log(result);
}

const deck = createDeck();
printDeck(deck);
