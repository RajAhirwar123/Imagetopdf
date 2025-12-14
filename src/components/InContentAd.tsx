// import { useEffect, useRef } from "react";

// const InContentAd = () => {
//   const adRef = useRef(null);

//   useEffect(() => {
//     if (!adRef.current) return;

//     // 🔹 Script already injected check (double ad se bachne ke liye)
//     if (adRef.current.childNodes.length > 0) return;

//     const script = document.createElement("script");
//     script.type = "text/javascript";
//     script.src =
//       "https://pl28255930.effectivegatecpm.com/96/39/61/963961a303ab223a9e3d2003a2f1cb3e.js";
//     script.async = true;

//     adRef.current.appendChild(script);
//   }, []);

//   return (
//     <div className="w-full py-6">
//       <div className="container flex justify-center">
//         {/* ✅ Adsterra script container */}
//         <div
//           ref={adRef}
//           style={{
//             width: "336px",
//             minHeight: "280px",
//             overflow: "hidden",
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default InContentAd;
