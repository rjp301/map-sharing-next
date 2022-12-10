import useSWR from "swr";

function MapItem(props: { name: string }) {
  const { name } = props;
  return <div>{name}</div>;
}

export default function Maplist(props: { maps: [] }) {
  const { data, error, isLoading } = useSWR("/api/maps");

  const { maps } = props;
  return <div>{maps.map((m) => MapItem(m))}</div>;
}

export async function getServerSideProps() {
  return { props: { maps: [{ name: "New York" }, { name: "Texas" }] } };
}
