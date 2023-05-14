import { Typography } from "../atom/Typography";
import { useMemory } from "./MemoryProvider";
import { MemoryCard } from "./MemoryCard";

export const MemoryBoard = () => {
  // Memory Game - Exercise
  const { cards, onReturnedCard } = useMemory();

  if (!cards) {
    return (
      <Typography variant="body2">
        An error occurs, there is no board.
      </Typography>
    );
  }

  return (
    <div className="grid w-max grid-cols-6 grid-rows-6 gap-2">
      {cards.map((card) => {
        return (
          <MemoryCard
            key={card.id}
            card={card}
            onClick={() => onReturnedCard(card)}
          >
            {card.emoji}
          </MemoryCard>
        );
      })}
    </div>
  );
};
