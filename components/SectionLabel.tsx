type SectionLabelProps = {
  children: React.ReactNode;
};

export default function SectionLabel({ children }: SectionLabelProps) {
  return <p className="label-text mb-2">{children}</p>;
}
