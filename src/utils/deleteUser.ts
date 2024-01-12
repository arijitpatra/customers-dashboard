/* eslint-disable @typescript-eslint/no-explicit-any */
export const deleteUser = (id: string, data: any) => {
  return data.filter((item) => item.id !== id);
};
