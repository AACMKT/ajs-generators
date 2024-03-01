export default function canIterate(obj) {
  try {
    const res = typeof obj[Symbol.iterator] === 'function';

    return res;
  } catch {
    return false;
  }
}
