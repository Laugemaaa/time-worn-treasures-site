import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
};

export function SectionWrapper({ children, className, id, as: Tag = "section" }: Props) {
  const { ref, revealed } = useReveal(0.1);

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn(
        "mx-auto max-w-[1200px] px-6",
        "reveal-up",
        revealed && "revealed",
        className
      )}
    >
      {children}
    </Tag>
  );
}
