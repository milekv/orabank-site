# OraBank case study

This repository contains the GitHub Pages case study for [Oracle Bank System](https://github.com/milekv/oracle-bank-system).

[Open the live case study](https://milekv.github.io/orabank-site/)

The page presents only functionality that can be inspected in the source repository:

- Oracle SQL relational model
- PL/SQL transfer package with deterministic locks and savepoint rollback
- Paired debit and credit transaction records
- Audit trigger and least-privilege roles
- Oracle Scheduler jobs
- Validation queries, smoke SQL and recovery runbook

It does not present benchmark numbers, live customer counts or production deployment claims.

## Local development

```bash
npm ci
npm run dev
```

Quality checks:

```bash
npm run typecheck
npm run lint
npm run build
```

## Stack

- React
- TypeScript
- Vite
- GitHub Pages

## Source project

The SQL and PL/SQL implementation lives in [milekv/oracle-bank-system](https://github.com/milekv/oracle-bank-system).
