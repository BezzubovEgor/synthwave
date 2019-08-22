import { isObject, isUndefined } from 'util';

/**
 * @export Utility to provide async/await support for express
 * @param {Function} fn - async function that has express handler signature
 * that you want convert into express handler
 * @returns {Function} - regular express handler
 * */
export default function async(fn) {
  return (req, res, next) => fn(req, res, next)
    .then((result) => {
      if (isObject(result)) {
        res.json(result);
      } else if (!isUndefined(result)) {
        res.send(result);
      }
    })
    .catch(({ status, message, stack }) => res.status(status || 500).json({ message, stack }));
}
