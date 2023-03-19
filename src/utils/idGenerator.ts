export const idGenerator = () => {
  let i = 0;
  return () => (i += 1);
};
