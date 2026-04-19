import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
  reveal?: "none" | "up" | "fade";
};

export function SectionWrapper({
  children,
  className,
  id,
  as: Tag = "section",
  reveal = "none",
}: Props) {
  const shouldReveal = reveal !== "none";
  const { ref, revealed } = useReveal(0.1);

  return (
    <Tag
      ref={shouldReveal ? ref : undefined}
      id={id}
      className={cn(
        "mx-auto max-w-[1200px] px-6",
        reveal === "up" && "reveal-up",
        reveal === "fade" && "reveal-fade",
        shouldReveal && revealed && "revealed",
        className
      )}
    >
      {children}
    </Tag>
  );
}
