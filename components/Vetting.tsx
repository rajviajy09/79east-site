"use client";

import { useRef, type PointerEvent, type MouseEvent } from "react";
import { Lines } from "./Lines";

// This is a client component (drag-to-scroll), so images arrive as
// ready-to-use URLs resolved on the server.
export type VettingCard = {
  title: string;
  body: string;
  matters?: string | null;
  imageSrc?: string;
  imageAlt: string;
};

export type VettingProps = {
  heading?: string | null;
  intro?: string | null;
  cards: VettingCard[];
};

export default function Vetting({ heading, intro, cards }: VettingProps) {
  const railRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  function onPointerDown(event: PointerEvent<HTMLDivElement>) {
    // Touch already scrolls natively — don't fight it.
    if (event.pointerType === "touch") return;
    const rail = railRef.current;
    if (!rail) return;

    drag.current = {
      active: true,
      startX: event.clientX,
      startScroll: rail.scrollLeft,
      moved: false,
    };
    rail.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const rail = railRef.current;
    if (!rail || !drag.current.active) return;

    const dx = event.clientX - drag.current.startX;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    rail.scrollLeft = drag.current.startScroll - dx;
  }

  function onPointerUp(event: PointerEvent<HTMLDivElement>) {
    const rail = railRef.current;
    drag.current.active = false;
    if (rail?.hasPointerCapture(event.pointerId)) {
      rail.releasePointerCapture(event.pointerId);
    }
  }

  // Swallow the click that fires at the end of a drag, so dragging
  // across a link doesn't navigate.
  function onClickCapture(event: MouseEvent<HTMLDivElement>) {
    if (!drag.current.moved) return;
    event.preventDefault();
    event.stopPropagation();
    drag.current.moved = false;
  }

  return (
    <section className="w-full overflow-hidden py-24 text-[#111111] lg:py-28">
      {/* Header */}
      <div className="grid grid-cols-12 gap-x-6 px-3 md:px-6">
        <h2 className="col-span-12 text-3xl md:text-5xl font-serif leading-none lg:col-span-7">
          <Lines text={heading} />
        </h2>

        <p className="col-span-12 mt-6 max-w-[48ch] text-base md:text-xl font-semibold leading-none lg:col-start-9 lg:col-span-4 lg:mt-3">
          {intro}
        </p>
      </div>

      {/* Draggable + scrollable rail */}
      <div
        ref={railRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onClickCapture={onClickCapture}
        className="mt-24 flex cursor-grab gap-8 overflow-x-auto overscroll-x-contain px-3 md:px-6 pb-4 active:cursor-grabbing lg:mt-24 lg:gap-8 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {cards.map((card) => (
          <article
            key={card.title}
            className="flex w-[70vw] shrink-0 select-none p-4 md:p-6 border rounded-4xl flex-col sm:w-[46vw] lg:w-[clamp(260px,23.4vw,420px)]"
          >
            {card.imageSrc && (
              <img
                src={card.imageSrc}
                alt={card.imageAlt}
                draggable={false}
                className="aspect-[472/325] w-full rounded-2xl object-cover"
              />
            )}

            <h3 className="mt-8 md:mt-10 text-2xl md:text-3xl font-serif uppercase leading-none lg:mt-10">
              {card.title}
            </h3>

            <p className="mt-5 text-xs md:text-sm font-semibold leading-tight">
              {card.body}
            </p>

            {card.matters && (
              <p className="mt-2 md:mt-6 text-xs md:text-sm font-semibold leading-tight">
                {card.matters}
              </p>
            )}
          </article>
        ))}

        {/* Trailing spacer so the last card can clear the right edge */}
        <div aria-hidden className="w-2 shrink-0" />
      </div>
    </section>
  );
}