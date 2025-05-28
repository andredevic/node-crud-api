export function extractQueryParams(query) {
  if (!query) return {}; // Evita erro se query for undefined

  return query
    .slice(1) // substitui substr(1) por slice(1)
    .split("&")
    .reduce((queryParams, param) => {
      const [key, value] = param.split("=");

      queryParams[key] = value;
      return queryParams;
    }, {});
}
