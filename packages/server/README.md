Whenever schema.prisma updated, run 2 commands:
$ bunx prisma migrate dev
$ bunx prisma generate

for bun, re-install all:
---

rm -rf generated
rm -rf node_modules
rm bun.lock

bun install
bunx prisma generate

---

for npm, re-install all:
----

rm -rf node_modules
rm package-lock.json
npm install

--

https://react-icons.github.io/react-icons/search/#q=sparkles

# server

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.14. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
