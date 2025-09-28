import "./Label.css";

export default function Label({children, htmlFor}) {
  return (
    <label className="label" htmlFor={htmlFor}>
      {children}
    </label>
  )
}