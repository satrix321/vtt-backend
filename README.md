## Prisma Migrations

1. Modify the schema
2. Run the following two commands:

```
npx @prisma/cli migrate save --experimental
npx @prisma/cli migrate up --experimental
npx @prisma/cli generate
```

## Localstack

1. Install localstack & run it

```
DATA_DIR="/tmp/localstack/data" localstack start
```

2. Install awscli-local

```
pip install awscli-local
```

3. Create VTT Bucket

```
awslocal s3 mb s3://vtt
```