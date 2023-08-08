import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import Evangile from "~/components/Evangile";

export default component$(() => {
  return (
    <>
      <div
        id="parent"
        class="flex flex-col justify-center p-8 overflow-auto"
        data-theme="dark"
      >
        <h1 class="text-5xl justify-center flex mb-8 font-mono font-bold text-white border-b-2 py-8 border-t-2">
          ✝️ Quotidie
        </h1>
        <Evangile />
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Quotidie",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
