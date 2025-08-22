## Setup

This has been setup using a [pnpm workspace](https://pnpm.io/workspaces). This monorepo approach is useful for getting started as everything lives in a common repository. This can easily be split up into independent repositories.

To get started first install pnpm if you haven't already.

```bash
npm install -g pnpm
```

Then simply run the install command to finish the setup.

```bash
pnpm install
```

### Start all packages

```bash
pnpm start
```

open [http://localhost:3000](http://localhost:3000)

### Build all packages

```bash
pnpm build
```

### Build docker

```bash
docker compose up --force-recreate --build
```
