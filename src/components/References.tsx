import { references } from "~/assets/data";

export const References = () => {
  return (
    <div tw="w-full text-left mb-80">
      <div>Links:</div>
      {references.map((link) => (
        <a target="_blank" rel="noopener noreferrer" href={link.url} tw="underline" key={link.url}>
          {link.name}
        </a>
      ))}
    </div>
  );
};
