const API_BASE = (
  import.meta.env.VITE_API_URL || "https://skill-backend-7grd.onrender.com"
).replace(/\/$/, "");

export const fetchHeader = async () => {
  const response = await fetch(`${API_BASE}/api/headers`);

  if (!response.ok) {
    throw new Error("Unable to load header content");
  }

  const payload = await response.json();
  return payload.data;
};

export const fetchCareerPaths = async () => {
  const response = await fetch(`${API_BASE}/api/career-paths`);

  if (!response.ok) {
    throw new Error("Unable to load career paths");
  }

  const payload = await response.json();
  return payload.data;
};

export const fetchRoadmap = async () => {
  const response = await fetch(`${API_BASE}/api/roadmaps`);

  if (!response.ok) {
    throw new Error("Unable to load roadmap tracks");
  }

  const payload = await response.json();
  return payload.data;
};

export const fetchProjects = async () => {
  const response = await fetch(`${API_BASE}/api/projects`);

  if (!response.ok) {
    throw new Error("Unable to load projects");
  }

  const payload = await response.json();
  return payload.data;
};

export const fetchJobReady = async () => {
  const response = await fetch(`${API_BASE}/api/job-ready`);

  if (!response.ok) {
    throw new Error("Unable to load job ready content");
  }

  const payload = await response.json();
  return payload.data;
};

export const fetchAbout = async () => {
  const response = await fetch(`${API_BASE}/api/about`);

  if (!response.ok) {
    throw new Error("Unable to load about content");
  }

  const payload = await response.json();
  return payload.data;
};

export const fetchContact = async () => {
  const response = await fetch(`${API_BASE}/api/contact`);

  if (!response.ok) {
    throw new Error("Unable to load contact content");
  }

  const payload = await response.json();
  return payload.data;
};

export const fetchRegister = async () => {
  const response = await fetch(`${API_BASE}/api/register`);

  if (!response.ok) {
    throw new Error("Unable to load registration");
  }

  const payload = await response.json();
  return payload.data;
};

export const submitRegistration = async (payload) => {
  const response = await fetch(`${API_BASE}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message || "Unable to submit registration");
  }

  return body.data;
};

export const submitEnquiry = async (payload) => {
  const response = await fetch(`${API_BASE}/api/contact/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.message || "Unable to send enquiry");
  }

  return body.data;
};
