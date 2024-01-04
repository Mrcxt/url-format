import queryString from "query-string";
import urlJoin from "url-join";

export default (url: string = location.href) => {
  try {
    const { hash: _hash, search: _search, origin, pathname } = new URL(url);

    const [hash, ...hashQuery] = _hash.split("?");

    let _query = {
      ...queryString.parse(_search),
    };
    hashQuery?.forEach((q) => {
      _query = {
        ..._query,
        ...queryString.parse(q),
      };
    });

    const searchParams = new URLSearchParams(Object.entries(_query) as []);
    const search = searchParams.size ? `?${searchParams.toString()}` : ``;
    const href = urlJoin(origin, pathname, search, hash);

    return new URL(href);
  } catch (err) {
    console.error(err);
    return null;
  }
};
