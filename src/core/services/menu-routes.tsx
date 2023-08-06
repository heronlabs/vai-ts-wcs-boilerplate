export const isCurrentPage = (
  menuItem: string[],
  currentPage: string
): boolean => {
  return menuItem.includes(currentPage);
};
