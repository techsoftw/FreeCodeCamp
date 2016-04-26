function convert(str) {
  return str
    .replace(new RegExp('&','g'),'&amp;')
    .replace(new RegExp('<','g'),'&lt;')
    .replace(new RegExp('>','g'),'&gt;')
    .replace(new RegExp('"','g'),'&quot;')
    .replace(new RegExp('\'','g'),'&apos;');
}

convert("Dolce & Gabbana");
