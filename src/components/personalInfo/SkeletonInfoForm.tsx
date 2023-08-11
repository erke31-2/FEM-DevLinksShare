const SkeletonInfoForm = () => {
  return (
    <section className="h-[650px] flex flex-col md:justify-around gap-y-4 pt-4">
      <article className="bg-cardBg rounded-xl mx-5 px-5 py-3 flex flex-col items-start gap-y-4 text-secondaryColor shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="bg-slate-200 w-full h-7 rounded-md animate-pulse md:w-[25%]" />
        <div className="w-full flex flex-col gap-4 md:w-[70%] md:flex-row md:items-center">
          <div className="w-[150px] h-[150px] bg-slate-200 animate-pulse rounded-md" />
          <div className="w-2/3 h-6 bg-slate-200 animate-pulse rounded-md" />
        </div>
      </article>
      <article className="h-[60%] flex flex-col justify-between">
        <div className="bg-cardBg rounded-xl px-5 mx-5 py-3 flex flex-col gap-y-5 md:gap-y-8 md:py-6 text-secondaryColor shadow-sm">
            <div className="w-full h-12 bg-slate-200 animate-pulse rounded-md"/>
            <div className="w-full h-12 bg-slate-200 animate-pulse rounded-md"/>
            <div className="w-full h-12 bg-slate-200 animate-pulse rounded-md"/>
        </div>
        <div className="w-full border-t pt-4 md:pt-8 border-t-gray-300 px-8 flex md:justify-end justify-center">
            <div className="bg-slate-200 animate-pulse w-full h-10 rounded-md"/>
        </div>
      </article>
    </section>
  );
};
export default SkeletonInfoForm;
