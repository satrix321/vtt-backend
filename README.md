## Prisma

1. Modify the schema
2. Run the following two commands:

```
npx @prisma/cli migrate save --experimental
npx @prisma/cli migrate up --experimental
npx @prisma/cli generate
```