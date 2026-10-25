import Image from "next/image";

// Type definition for the card object
type CardType = {
    title: string; // Title of the card
    src: string; // Image source URL
};

// Static card: not clickable, no hover/blur effect, no client-side state (lighter and smoother)
export function Card({ card }: { card: CardType }) {
    return (
        <div className="rounded-md relative bg-bg-secondary overflow-hidden h-40 md:h-60 lg:h-96 w-full mt-5">
            {/* Card image */}
            <Image
                src={card.src}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover absolute inset-0"
            />

            {/* Dark gradient overlay from bottom to top */}
            <div className="absolute inset-0 bg-gradient-to-t from-text-primary to-transparent"></div>

            {/* Title on top of the gradient */}
            <div className="absolute inset-x-0 bottom-0 py-4 md:py-6 lg:py-8 px-4">
                <div className="text-lg md:text-xl lg:text-2xl font-medium text-bg-primary">
                    {card.title}
                </div>
            </div>
        </div>
    );
}

// FocusCards component to render a list of cards
export function FocusCards({ cards }: { cards: CardType[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 w-full capitalize">
            {cards.map((card) => (
                <Card key={card.title} card={card} />
            ))}
        </div>
    );
}
