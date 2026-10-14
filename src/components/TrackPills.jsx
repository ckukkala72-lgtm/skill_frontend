const TrackPills = ({ tracks, selected, onSelect }) => (
  <div className="mt-8 flex flex-wrap gap-3">
    {tracks.map((track) => {
      const isActive = selected === track.id;
      return (
        <button
          key={track.id}
          type="button"
          onClick={() => onSelect(track.id)}
          className={[
            "rounded-full border px-4 py-2 text-sm font-medium transition",
            isActive
              ? "border-sky-500/40 bg-[#1a365d] text-white"
              : "border-white/15 bg-transparent text-slate-300 hover:border-white/30 hover:text-white",
          ].join(" ")}
        >
          {track.label}
        </button>
      );
    })}
  </div>
);

export default TrackPills;
