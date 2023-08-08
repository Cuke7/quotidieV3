import { component$, Resource, useResource$ } from "@builder.io/qwik";

export default component$(() => {
  const date = new Date();
  date.toISOString().split("T")[0];

  const evangileData = useResource$<any>(async () => {
    const response = await fetch(
      "https://api.aelf.org/v1/messes/2023-08-08/france",
      {
        headers: {
          accept: "application/json",
        },
        body: null,
        method: "GET",
      }
    );
    const data = await response.json();
    const evangile = data.messes[0].lectures.find(
      (item: any) => item.type == "evangile"
    );

    return evangile;
  });

  return (
    <>
      {/* <input type="number" bind:value={prNumber} /> */}
      <Resource
        value={evangileData}
        onPending={() => <p>Loading...</p>}
        onResolved={(html) => (
          <div dangerouslySetInnerHTML={html.contenu}></div>
        )}
      />
    </>
  );
});
