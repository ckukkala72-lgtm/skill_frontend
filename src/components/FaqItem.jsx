const FaqItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border-b border-white/10 last:border-b-0">
    <button
      type="button"
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      aria-expanded={isOpen}
    >
      <span className="text-sm font-medium text-slate-200">{question}</span>
    </button>
    {isOpen && (
      <p className="px-5 pb-4 text-sm leading-6 text-slate-400">{answer}</p>
    )}
  </div>
);

export default FaqItem;
