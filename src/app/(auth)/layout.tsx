"use client";

import { usePathname } from "next/navigation";
import { animated, useTransition } from "react-spring";

export default function Layout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    // TODO: replace h-screen with a more approriate height length when parent layout is ready
    const transitions = useTransition(children, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        config: { duration: 500 },
        keys: pathname,
    });

    return transitions((styles, child) => (
        <animated.div
            className="w-full h-screen flex justify-center items-center absolute"
            style={styles}
        >
            {child}
        </animated.div>
    ));
}
