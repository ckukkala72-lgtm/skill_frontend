const TRACK_BY_TITLE = {
  "Data Analyst": "data-analyst",
  "Data Scientist": "data-scientist",
  "AI / ML Engineer": "ai-ml",
  "AI / ML": "ai-ml",
  "Generative AI": "generative-ai",
  "Agentic AI": "agentic-ai",
};

export const programTrackSlug = (program) => {
  const fromUrl = program?.roadmap?.match(/[?&]track=([^&]+)/)?.[1];
  if (fromUrl) {
    return decodeURIComponent(fromUrl);
  }

  return program?.trackSlug || TRACK_BY_TITLE[program?.title] || "";
};

export const programRoadmapPath = (program) => {
  const slug = programTrackSlug(program);
  return slug ? `/roadmaps?track=${slug}` : "/roadmaps";
};
