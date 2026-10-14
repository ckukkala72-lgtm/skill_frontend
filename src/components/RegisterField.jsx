const inputClass =
  "mt-2 w-full rounded-xl border border-white/20 bg-transparent px-3 py-2.5 text-sm text-white outline-none focus:border-sky-400";
const selectClass =
  "mt-2 w-full appearance-none rounded-full border border-white/20 bg-[#0b1c33] px-4 py-2 text-sm text-white outline-none focus:border-sky-400";

const RegisterField = ({ field, value, onChange }) => {
  const spanClass = field.span === 2 ? "sm:col-span-2" : "";

  if (field.type === "textarea") {
    return (
      <label className={`block text-sm font-medium text-white ${spanClass}`}>
        {field.label}
        {field.required && <span className="text-sky-400"> *</span>}
        <textarea
          className={`${inputClass} min-h-[92px] resize-y`}
          name={field.name}
          value={value || ""}
          onChange={onChange}
          required={field.required}
        />
      </label>
    );
  }

  if (field.type === "select") {
    return (
      <label className={`block text-sm font-medium text-white ${spanClass}`}>
        {field.label}
        {field.required && <span className="text-sky-400"> *</span>}
        <select
          className={selectClass}
          name={field.name}
          value={value || ""}
          onChange={onChange}
          required={field.required}
        >
          <option value="">Select</option>
          {(field.options ?? []).map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    );
  }

  if (field.type === "file") {
    return (
      <div className={`block text-sm font-medium text-white ${spanClass}`}>
        {field.label}
        <div className="mt-3 flex items-center gap-3">
          <label className="inline-flex cursor-pointer rounded-full bg-sky-500/15 px-4 py-2 text-sm font-semibold text-sky-300 hover:bg-sky-500/25">
            Choose file
            <input
              className="hidden"
              type="file"
              name={field.name}
              accept={field.accept}
              onChange={onChange}
            />
          </label>
          <span className="text-sm text-slate-500">
            {value || "No file chosen"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <label className={`block text-sm font-medium text-white ${spanClass}`}>
      {field.label}
      {field.required && <span className="text-sky-400"> *</span>}
      <input
        className={inputClass}
        type={field.type === "url" ? "url" : field.type || "text"}
        name={field.name}
        value={value || ""}
        placeholder={field.placeholder || ""}
        onChange={onChange}
        required={field.required}
      />
    </label>
  );
};

export default RegisterField;
