const large = Bun.file("large.html");
Bun.serve({
  port: 3005,
  fetch(req) {
    return new Response(large);
  },
});
