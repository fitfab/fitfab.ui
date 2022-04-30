import { Button } from "@fitfab/core";
import { useIsomorphicLayoutEffect } from "@fitfab/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("fitfab docs page");
  }, []);
  return (
    <div>
      <h1>fitfab Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
