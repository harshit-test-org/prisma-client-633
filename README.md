# Introduction

Reproduction for issue https://github.com/prisma/prisma-client-js/issues/633


## Steps

1. Clone this repository
2. Set your credentials in prisma/.env
3. Run `npx @prisma/cli@alpha migrate save --experimental && npx @prisma/cli@alpha migrate up --experimental`
4. Run `npx ts-node index.ts`
