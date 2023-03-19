export const idGenerator = () => {
  let i = 1;
  return () => (i += 1);
};
