'use client';

import { useLocale } from "next-intl";
import { motion } from "framer-motion";

const HeartIcon = () => (
  <svg width="38" height="34" viewBox="0 0 38 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path opacity="0.4" d="M25.4222 29.4842C28.1941 27.4711 30.377 25.3858 32.0498 23.3046L22.3024 12.454C21.9034 12.0099 21.2354 11.9143 20.7237 12.2281L16.867 14.5931C15.5098 15.4254 13.7484 15.2381 12.6045 14.1399C11.0934 12.6892 11.2458 10.2607 12.9269 9.00296L18.9641 4.48606L17.1397 3.14704C14.6592 1.31931 10.5301 0.171878 5.79923 3.01918C-0.409541 6.75596 -1.81443 19.0837 12.5068 29.4842C15.2345 31.4652 16.5984 32.4557 18.9645 32.4557C21.3305 32.4557 22.6944 31.4652 25.4222 29.4842Z" fill="#D26A30"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M17.9339 2.10908C17.9336 2.10884 17.9342 2.10932 17.9339 2.10908L18.9639 2.86506L19.9944 2.10908C19.994 2.10939 19.9948 2.10877 19.9944 2.10908C22.8446 0.00956563 27.563 -1.25196 32.8212 1.91269C38.7505 5.48125 40.3499 15.0743 33.0884 24.1086C31.3352 26.2899 29.0649 28.4538 26.209 30.5279C26.1473 30.5727 26.0862 30.6171 26.0255 30.6612C23.465 32.5218 21.7693 33.7541 18.9641 33.7541C16.159 33.7541 14.4633 32.5218 11.9028 30.6612C11.8421 30.6171 11.781 30.5727 11.7193 30.5279C4.34575 25.173 0.864013 19.2035 0.142559 13.9255C-0.575431 8.67288 1.47071 4.10127 5.10709 1.91269C10.3654 -1.25206 15.0837 0.00943934 17.9339 2.10908ZM16.7684 4.49614L16.3448 4.18526C14.234 2.62987 10.6936 1.59645 6.49074 4.12594C3.91835 5.67414 2.15766 9.1348 2.76533 13.5804C3.36954 18.0006 6.34595 23.3953 13.2936 28.4409C16.0848 30.468 17.1036 31.1576 18.9641 31.1576C20.8247 31.1576 21.8435 30.468 24.6347 28.4409C26.9465 26.7619 28.8199 25.0427 30.3121 23.334L21.3599 13.3688L17.568 15.6941C15.6929 16.844 13.2593 16.5852 11.6788 15.0679C9.5911 13.0636 9.80172 9.7085 12.1243 7.97076L16.7684 4.49614ZM31.96 21.2417C37.4636 13.4335 35.315 6.45958 31.4376 4.12594C27.2347 1.59645 23.6943 2.62987 21.5835 4.18526L21.5813 4.18688L19.7611 5.52226L13.7289 10.0354C12.6893 10.8132 12.5951 12.315 13.5295 13.2121C14.2369 13.8912 15.3262 14.007 16.1655 13.4924L20.0221 11.1273C21.0829 10.4768 22.4675 10.675 23.2946 11.5958L31.96 21.2417Z" fill="#D26A30"/>
  </svg>
);

const timelineData = [
  {
    id: 1,
    number: "1",
    numberOpacity: 1,
    title: "التأسيس",
    text: "البداية مصنع كاسفول كمصنع متخصص في تصنيع البلك البركاني باستخدام خامات محلية.",
    left: "83.33%",
    top: "80%",
  },
  {
    id: 2,
    number: "2",
    numberOpacity: 0.4,
    title: "النمو الإقليمي",
    text: "افتتاح فروع وقطاعات جديدة والتوسع في 4 دول عربية والوصول لـ 1000 مشروع",
    left: "50%",
    top: "50%",
  },
  {
    id: 3,
    number: "3",
    numberOpacity: 0.2,
    title: "القيادة",
    text: "أصبحنا شريك موثوق لأكثر من 500 مؤسسة رائدة في جميع القطاعات ومشاركين نجاحات مختلفة معهم من البداية حتى الانطلاق",
    left: "16.66%",
    top: "20%",
  },
];

export default function OurJourney() {
  const locale = useLocale();
  return (
    <section className="relative w-full lg:pb-30 overflow-hidden bg-main-white">
      
      {/* Background Decorative Blob */}
      <div className="absolute right-[-30%] 2xl:right-[-17%] top-[3%] lg:w-[515px] lg:h-[515px] xl:w-[600px] xl:h-[600px] 2xl:w-[750px] 2xl:h-[750px] bg-bg-filter rounded-full pointer-events-none z-10"></div>

      <div className="section-container relative z-10">
        
        {/* Header Content */}
        <div className="flex justify-start w-full" dir="rtl">
          <div className={`max-w-2xl ${locale === 'ar' ? 'text-start' : 'text-end'}`}>
             <h2 className="text-4xl lg:text-[40px] font-bold text-primary leading-[160%] mb-6 tracking-tight">
               رحلة Be Group عبر <br className="hidden md:block"/> 
               السنين... من التأسيس <br className="hidden md:block"/> 
               إلى الريادة.
             </h2>
             <p className="text-main-black text-lg lg:text-xl font-semibold leading-[160%] max-w-[550px]">
               منذ انطلاقتنا الأولى، عملنا باستمرار على تطوير منتجاتنا، وتوسيع قدراتنا، وتحقيق أعلى معايير الجودة. هذا الخط الزمني يلخص رحلتنا نحو الريادة في صناعة البلك البركاني.
             </p>
          </div>
        </div>

        {/* Desktop Timeline */}
        <div 
          className="hidden lg:block relative w-full mx-auto -mt-40" 
          style={{ maxWidth: '1200px', aspectRatio: '1200 / 500' }} 
          dir="ltr"
        >
          {/* 1. Underlying Texts and Numbers Layer */}
          {timelineData.map((node, index) => (
            <div 
              key={`text-${node.id}`} 
              className="absolute z-0 flex flex-col items-center group"
              style={{ left: node.left, top: node.top, transform: 'translate(-50%, -50%)' }}
            >
              <div className="absolute top-[85px] w-max max-w-[320px] pt-8 flex flex-col items-center text-center" dir="rtl">
                 <div className="relative z-0 flex flex-col items-center">
                    {/* Big Background Number */}
                    <motion.span 
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: node.numberOpacity, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.3 + 0.5 }}
                      className="absolute top-[-190px] lg:left-[-45px] xl:left-[-80px] xl:text-[240px] lg:text-[180px] text-[160px] font-black leading-none text-[#E8E8E8] -z-10 select-none tracking-tighter mix-blend-multiply transition-opacity duration-500 group-hover:!opacity-100"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {node.number}
                    </motion.span>
                    
                    {/* Heading & Paragraph Wrapper Shifted to X-axis towards the number */}
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.7 }}
                      className="xl:translate-x-[-100px] lg:translate-x-[-60px] md:translate-x-[-40px] -mt-10 xl:-mt-4"
                    >
                      <h3 className={`text-xl font-bold leading-[160%] text-main-black mb-4 w-full whitespace-nowrap ${locale === 'ar' ? 'text-start' : 'text-end'}`}>{node.title}</h3>
                      <p className={`text-[#333333] text-xl leading-[30px] font-medium xl:max-w-[320px] lg:max-w-[260px] max-w-[240px] ${locale === 'ar' ? 'text-start' : 'text-end'}`}>
                        {node.text}
                      </p>
                    </motion.div>
                 </div>
              </div>
            </div>
          ))}

          {/* 2. Curvy Orange Line Layer */}
          <svg 
            className="absolute inset-0 w-full h-full overflow-visible z-10 pointer-events-none" 
            viewBox="0 0 1200 500" 
            preserveAspectRatio="xMidYMid meet"
            style={{ filter: "drop-shadow(0px 14px 12px rgba(0,0,0,0.45)) drop-shadow(0px 6px 4px rgba(0,0,0,0.50))" }}
          >
            <motion.path 
              d="M 1185 360 L 1000 400 C 750 450, 800 250, 600 250 C 300 250, 450 120, 200 100 L 110 85"
              fill="none" 
              stroke="#D26A30"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* 3. Floating Circles Layer */}
          {timelineData.map((node, index) => (
            <motion.div 
              key={`circle-${node.id}`} 
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: index * 0.8 + 0.5 
              }}
              className="absolute z-20 flex flex-col items-center"
              style={{ 
                left: node.left, 
                top: node.top, 
                x: "-50%", 
                y: "-50%" 
              }}
            >
              {/* Circle with Heart Icon */}
              <div className="w-[90px] h-[90px] rounded-full bg-white shadow-[0px_4px_30px_rgba(0,0,0,0.08)] flex items-center justify-center relative transition-transform duration-500 hover:scale-110 cursor-pointer border border-[#FAFAFA]">
                <HeartIcon />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden relative w-full mt-12 overflow-hidden">
          {/* Vertical Line */}

          <div className="flex flex-col gap-20 relative z-10">
            {timelineData.map((node, index) => (
              <div key={node.id} className={`relative flex items-start w-full ps-4 group ${locale === 'ar' ? 'gap-10' : 'gap-0'}`}>
                 {/* Vertical Line Segment */}
                 {index < timelineData.length - 1 && (
                    <motion.div 
                       initial={{ height: 0 }}
                       whileInView={{ height: '160%' }}
                       viewport={{ once: true }}
                       transition={{ duration: 0.8, delay: index * 0.2 }}
                       className="absolute inset-s-[43px] top-[40px] w-1 bg-primary opacity-60 z-0 origin-top rounded-full"
                    />
                 )}
                 
                 {/* Circle */}
                 <div className="shrink-0 w-[64px] h-[64px] rounded-full bg-white shadow-[0px_4px_25px_rgba(0,0,0,0.08)] flex items-center justify-center relative translate-y-2 z-20 border border-[#FAFAFA]">
                    <div className="scale-[0.8]">
                      <HeartIcon />
                    </div>
                 </div>

                 {/* Content */}
                 <div className="flex flex-col pt-4 relative w-full z-10 ps-2">
                    {/* Background Number */}
                    <motion.span 
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: node.numberOpacity, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="absolute -top-6 right-16 text-[150px] font-black leading-none text-[#EAEAEA] -z-10 select-none mix-blend-multiply transition-opacity duration-500 group-hover:!opacity-100"
                      style={{ fontFamily: 'var(--font-montserrat), sans-serif' }}
                    >
                      {node.number}
                    </motion.span>
                    {/* Heading & Paragraph Wrapper Shifted to X-axis towards the number */}
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                      className="translate-x-[20px]"
                    >
                      <h3 className="text-[22px] font-black text-main-black mb-3 leading-tight">{node.title}</h3>
                      <p className="text-font-body text-base leading-relaxed font-medium">
                        {node.text}
                      </p>
                    </motion.div>
                 </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
