export function Section(props) {
  return <section className="section">{props.children}</section>;
}

export function SectionTitle(props) {
  return <div className="section_title">{props.children}</div>;
}

export function SectionBody(props) {
  return <div className="section_body">{props.children}</div>;
}
