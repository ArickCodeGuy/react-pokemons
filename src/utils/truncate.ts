/**
 * @returns string with specified number of letters + '...' or the same string if length is less than specified num
 */
export default function (str: string, num: number) {
  if (str.length > num) {
    return str.slice(0, num) + '...';
  }

  return str;
}
