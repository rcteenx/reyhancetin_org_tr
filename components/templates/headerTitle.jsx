import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleStyles = cva(" ", {
  variants: {
    bgColor: {
      default: "bg-indigo border-b-2 border-indigo-light-5 shadow-lg",
      secondary: "bg-indigo",
      danger: "bg-red-600",
    },
  },
  defaultVariants: {
    bgColor: "default",
  },
});

export default function HeaderTitle({ bgColor, children, ...props }) {
  return (
    <section id="headerBand" className={cn(titleStyles({ bgColor }))}>
      <div className="mx-auto md:container px-4 lg:px-0">
        <h3 className="p-1 my-0 font-light text-white">{children}</h3>
      </div>
    </section>
  );
}
