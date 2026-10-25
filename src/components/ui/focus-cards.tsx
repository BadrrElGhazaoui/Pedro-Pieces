import Image from "next/image";

type CardType = {
    title: string;
    description: string;
    image: string;
};

export function Card({ card }: { card: CardType }) {
    return (
        <article className="group relative mt-5 h-72 w-full overflow-hidden rounded-2xl bg-text-primary shadow-md sm:h-80 lg:h-[22rem]">
            <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="absolute inset-0 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#071a2d]/95 via-[#071a2d]/35 to-transparent"></div>

            <div className="absolute inset-x-0 bottom-0 px-5 py-6 text-left sm:px-6">
                <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
                    {card.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/85">
                    {card.description}
                </p>
            </div>
        </article>
    );
}

export function FocusCards({ cards }: { cards: CardType[] }) {
    return (
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {cards.map((card) => (
                <Card key={card.title} card={card} />
            ))}
        </div>
    );
}
