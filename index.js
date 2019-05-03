function getLinksFromMd(str) {
  const regex = /\[([^\]]+)\]\(([http|\.|\/|\^\)][^\)^\s]+)/ig; // eslint-disable-line no-useless-escape
  let matches = [];
  let match = null;
  while ((match = regex.exec(str))) {
    matches.push(match);
  }

  const links = matches.map(match => ({
    href: match[2],
    text: match[1]
  }));

  return links;
}

module.exports.getLinksFromMd = getLinksFromMd;
