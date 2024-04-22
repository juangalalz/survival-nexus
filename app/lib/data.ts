const { survivors } = require('./mock-data.js');

function paginate(array: any[], pageSize: number, pageNumber: number) {
  return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
}

const ITEMS_PER_PAGE = 10;
export function fetchSurvivors(currentPage: number) {
  const paginatedSurvivors = paginate(survivors, ITEMS_PER_PAGE, currentPage);
  const survivorsLength = survivors.length;
  const totalPages = survivorsLength / ITEMS_PER_PAGE;

  return { survivors: paginatedSurvivors, totalPages, survivorsLength };
}
