/**
 * @param {number} millis
 * @param {() => void} callback
 * @returns {() => () => void}
 */
export function sleep_impl(millis, callback) {
  return () => {
    const timeout = setTimeout(() => {
      callback();
    }, millis);
    return () => {
      clearTimeout(timeout);
    };
  };
}
