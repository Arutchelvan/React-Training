import { useEffect } from "react";

export function useKey(keyCode, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.key.toLowerCase() === keyCode.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, keyCode],
  );
}
