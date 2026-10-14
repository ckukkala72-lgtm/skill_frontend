import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendEnquiry } from "../store/slices/contactSlice";
import { icons } from "./icons";

const fieldClass =
  "mt-2 w-full rounded-xl border border-white/15 bg-transparent px-3 py-2.5 text-sm text-white outline-none focus:border-sky-400";
const selectClass =
  "mt-2 w-full appearance-none rounded-full border border-white/15 bg-[#0b1c33] px-4 py-2 text-sm text-white outline-none focus:border-sky-400";

const ContactEnquiryForm = ({ page }) => {
  const dispatch = useDispatch();
  const { submitStatus, submitError } = useSelector((state) => state.contact);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    course: page.courses?.[0] || "",
    learnerType: page.learnerTypes?.[0] || "",
    message: "",
  });

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const result = await dispatch(sendEnquiry(form));
    if (sendEnquiry.fulfilled.match(result)) {
      setForm({
        name: "",
        phone: "",
        email: "",
        course: page.courses?.[0] || "",
        learnerType: page.learnerTypes?.[0] || "",
        message: "",
      });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-sky-500/20 bg-[#0b1c33] p-6 lg:p-8"
    >
      <h2 className="text-2xl font-bold text-white">{page.formTitle}</h2>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-white">
          Name
          <input
            className={fieldClass}
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
        </label>
        <label className="block text-sm font-medium text-white">
          Phone
          <input
            className={fieldClass}
            name="phone"
            value={form.phone}
            onChange={onChange}
            required
          />
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-white">
        Email
        <input
          className={fieldClass}
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          required
        />
      </label>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-white">
          Interested Course
          <select
            className={selectClass}
            name="course"
            value={form.course}
            onChange={onChange}
          >
            {(page.courses ?? []).map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-white">
          Learner Type
          <select
            className={selectClass}
            name="learnerType"
            value={form.learnerType}
            onChange={onChange}
          >
            {(page.learnerTypes ?? []).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-white">
        Message
        <textarea
          className={`${fieldClass} min-h-[96px] resize-y`}
          name="message"
          value={form.message}
          onChange={onChange}
        />
      </label>

      {submitStatus === "failed" && (
        <p className="mt-4 text-sm text-red-300">{submitError}</p>
      )}
      {submitStatus === "succeeded" && (
        <p className="mt-4 text-sm text-emerald-400">
          Enquiry sent. We will get back to you shortly.
        </p>
      )}

      <button
        type="submit"
        disabled={submitStatus === "loading"}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2563eb] px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:opacity-60"
      >
        <span className="inline-flex h-4 w-4 [&>svg]:h-4 [&>svg]:w-4">
          {icons.send}
        </span>
        {submitStatus === "loading"
          ? "Sending..."
          : page.submitLabel || "Talk to SkilVantage"}
      </button>
    </form>
  );
};

export default ContactEnquiryForm;
