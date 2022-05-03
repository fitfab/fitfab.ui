import { Button } from "@fitfab/core";
import { useIsomorphicLayoutEffect } from "@fitfab/utils";

export default function Docs() {
  return (
    <div className="bg-slate-200 min-h-screen max-w-5xl mx-auto px-6">
      <h1 className=" py-4">fitfab UI Documentation</h1>
      <nav></nav>
      <Button onClick={(e) => console.log(e)}>Click me</Button>
    </div>
  );
}
