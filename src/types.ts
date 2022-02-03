import { Color, Mark } from "./enums";

export type Deck = NormalCard[];

export type NormalCard = {
    mark: Mark;
    color: Color;
};