import { useEffect, useRef } from "react";

export function useClickOutside(close) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) close();
      }
      // modal is attached to body, top of the tree,
      // when events bubble up, it will affect the modal at the end ( so any clicking(including add new cabin button) , will be listened as clicking outside the modal => close the modal)

      // don't listend to event in BUBBLING phase from down of the three up
      // Listen in Capturing Phase up to down, add 3rd parameter, (true)

      document.addEventListener("click", handleClick, true);

      // clean-up function after finish
      return () => document.removeEventListener("click", handleClick, true);
    },
    [close]
  );
}
