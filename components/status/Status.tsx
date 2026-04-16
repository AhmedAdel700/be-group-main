"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";

const Counter = ({ value, delay = 0 }: { value: number; delay?: number }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
        delay: delay,
      });
      return controls.stop;
    }
  }, [isInView, count, value, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

const Status = () => {
  const stats = [
    {
      number: 50,
      label: "قطاعات رئيسية",
    },
    {
      number: 100,
      label: "برنامج تدريبي",
    },
    {
      number: 3000,
      label: "عميل",
    },
  ];

  return (
    <section className="bg-[#161414] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 lg:gap-40">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center w-[calc(50%-20px)] md:w-auto"
            >
              {/* Number section with stable width */}
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="text-main-white leading-[125%] font-medium text-[60px] tabular-nums min-w-[120px] md:min-w-[160px] flex justify-center items-baseline"
              >
                <Counter value={stat.number} delay={0.6 + index * 0.1} />+
              </motion.h2>

              {/* Text section - renders first */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-[#FCFCFC] font-normal leading-[155%] text-lg"
              >
                {stat.label}
              </motion.p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
