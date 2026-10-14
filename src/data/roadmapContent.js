export const roadmapContent = {
  eyebrow: "Career Roadmaps",
  title: "From Foundation to Job Ready",
  description:
    "Pick a career track and see the exact progression — what you learn, what you build, and how you prepare for interviews.",
};

export const trackPillLabel = (title = "") => {
  if (title.includes("AI / ML")) return "AI / ML";
  return title.replace(" Engineer", "");
};
