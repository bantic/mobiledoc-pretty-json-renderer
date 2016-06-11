function indent(multiline, depth) {
  var indent = Array(depth).fill(' ').join('');
  return multiline.replace(/^/gm, indent);
}

function arround(inner) {
  return `[${inner}]`;
}

function prettyJSON(obj) {
  return JSON.stringify(obj, null, '  ');
}

function multiLineArray(items) {
  if (items.length) {
    var block = indent(items.join(',\n'), 2);
    return '[\n' + block + '\n]';
  } else {
    return '[]';
  }
}


module.exports = {
  indent,
  arround,
  prettyJSON,
  multiLineArray
};
