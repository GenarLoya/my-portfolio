import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <div className="text-center font-extralight">Hello {props.params.name}</div>
  );
}
