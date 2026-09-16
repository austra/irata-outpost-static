const a = await (await fetch("/gz-a.txt")).text();
const b = await (await fetch("/gz-b.txt")).text();
const _gz = Uint8Array.from(atob(a + b), c => c.charCodeAt(0));
const _ds = new DecompressionStream("gzip");
const _stream = new Blob([_gz]).stream().pipeThrough(_ds);
const _code = await new Response(_stream).text();
await import(URL.createObjectURL(new Blob([_code], { type: "text/javascript" })));
