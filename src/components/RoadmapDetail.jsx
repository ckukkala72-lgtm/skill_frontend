import Button from "./Button";
import RoadmapStage from "./RoadmapStage";
import { icons } from "./icons";

const RoadmapDetail = ({ track }) => {
  if (!track) return null;

  return (
    <section className="mt-12">
      <h2 className="text-3xl font-bold text-white md:text-[36px]">
        {track.heading || `${track.label} Roadmap`}
      </h2>
      {track.summary && (
        <p className="mt-3 max-w-3xl text-[17px] leading-7 text-slate-400">
          {track.summary}
        </p>
      )}

      <div className="mt-8">
        {(track.stages ?? []).map((stage, index) => (
          <RoadmapStage
            key={stage.number}
            stage={stage}
            showConnector={index < track.stages.length - 1}
          />
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button to="/register" className="gap-2">
          {track.registerLabel || `Register for ${track.label}`}
          <span className="inline-flex h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
            {icons.arrow}
          </span>
        </Button>
        <Button to={track.detailsPath || "/programs"} variant="outline">
          Full program details
        </Button>
      </div>
    </section>
  );
};

export default RoadmapDetail;
