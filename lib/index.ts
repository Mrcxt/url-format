import queryString from "query-string";
import urlJoin from "url-join";

export default (url: string = location.href) => {
  try {
    const { hash, origin, pathname, search: _search } = new URL(url);
    const [hashPath, ...hashQuery] = hash.split("?");

    let _query = {
      ...queryString.parse(_search),
    };
    hashQuery?.forEach((q) => {
      _query = {
        ..._query,
        ...queryString.parse(q),
      };
    });

    const query = new URLSearchParams(Object.entries(_query) as []);
    const search = query.size ? `?${query.toString()}` : ``;

    return {
      origin,
      pathname,
      hash,
      query,
      search,
      url: urlJoin(origin, pathname, hashPath, search),
    };
  } catch (err) {
    throw new Error(`<url-format>: url is invalid`);
  }
};
