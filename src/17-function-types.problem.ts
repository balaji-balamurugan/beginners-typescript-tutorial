import { Equal, Expect } from "./helpers/type-utils";

type onFocusChange = (args: boolean) => any;
/**
 * How do we type onFocusChange?
 */
const addListener = (onFocusChange: onFocusChange) => {
  window.addEventListener("focus", () => {
    onFocusChange(true);
  });

  window.addEventListener("blur", () => {
    onFocusChange(false);
  });
};

addListener((isFocused) => {
  console.log({ isFocused });

  type tests = [Expect<Equal<typeof isFocused, boolean>>];
});
