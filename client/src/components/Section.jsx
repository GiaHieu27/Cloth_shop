export function Section(props) {
  return <section className="section">{props.children}</section>;
}

export function SectionTitle(props) {
  return <section className="section_title">{props.children}</section>;
}

export function SectionBody(props) {
  return <section className="section_body">{props.children}</section>;
}
