# CitreaScan Documentation

Official documentation for CitreaScan - the blockchain explorer for the Citrea network.

## Deployment

Das Deployment erfolgt automatisch via GitHub Actions:

- **Develop Branch** → Automatisches Deployment auf https://dev.docs.citreascan.com/
- **Main Branch** → Automatisches Deployment auf https://docs.citreascan.com/

### Voraussetzungen

Die folgenden Secrets müssen in den GitHub Repository Settings hinterlegt werden:

#### Development Environment
- `DEV_HOST` - FTP Server Hostname
- `DEV_USER` - FTP Username
- `DEV_PASSWORD` - FTP Password

#### Production Environment
- `PRD_HOST` - FTP Server Hostname
- `PRD_USER` - FTP Username
- `PRD_PASSWORD` - FTP Password

### Deployment Workflow

1. Code auf den `develop` Branch pushen → automatisches Deployment auf Dev-Server
2. Code auf den `main` Branch pushen → automatisches Deployment auf Production-Server

Das Deployment kann auch manuell über die GitHub Actions "workflow_dispatch" Funktion gestartet werden.

### Manuelles Build (falls benötigt)

Wenn du die Seite lokal builden möchtest:

```bash
npm install
npm run build
```

Die generierten Dateien befinden sich in `src/.vuepress/dist/`

## Structure

```
docs/
├── src/
│   ├── .vuepress/
│   │   ├── config.js          # VuePress configuration
│   │   └── public/            # Static assets
│   │       └── assets/
│   ├── index.md               # Homepage
│   ├── overview.md            # Overview page
│   ├── getting-started.md     # Getting started guide
│   └── faq.md                 # FAQ page
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
