import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Container from "../components/Container";
import RoadmapDetail from "../components/RoadmapDetail";
import SectionEyebrow from "../components/SectionEyebrow";
import TrackPills from "../components/TrackPills";
import { loadRoadmap } from "../store/slices/roadmapSlice";

const Roadmaps = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { data, status, error } = useSelector((state) => state.roadmap);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadRoadmap());
    }
  }, [dispatch, status]);

  const tracks = data?.tracks ?? [];
  const requested = searchParams.get("track") || "";
  const selected =
    tracks.find((track) => track.slug === requested)?.slug ||
    tracks[0]?.slug ||
    "";
  const pills = tracks.map((track) => ({
    id: track.slug,
    label: track.label,
  }));
  const selectedTrack = tracks.find((track) => track.slug === selected);

  const onSelect = (slug) => {
    setSearchParams(slug ? { track: slug } : {}, { replace: true });
  };

  return (
    <section className="pt-12 pb-20 lg:pt-16">
      <Container>
        <SectionEyebrow>{data?.eyebrow || "Career Roadmaps"}</SectionEyebrow>
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-[48px]">
          {data?.title || "From Foundation to Job Ready"}
        </h1>
        <p className="mt-5 max-w-2xl text-[17px] leading-7 text-slate-400">
          {data?.description}
        </p>

        {status === "loading" && (
          <p className="mt-8 text-sm text-slate-400">Loading tracks...</p>
        )}
        {status === "failed" && (
          <p className="mt-8 text-sm text-red-300">{error}</p>
        )}

        {pills.length > 0 && (
          <TrackPills
            tracks={pills}
            selected={selected}
            onSelect={onSelect}
          />
        )}

        {selectedTrack?.stages?.length > 0 && (
          <RoadmapDetail track={selectedTrack} />
        )}
      </Container>
    </section>
  );
};

export default Roadmaps;
