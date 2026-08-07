# Cloud Container Service

Microservice starter template with Docker containerization and Kubernetes health monitoring.

## Configuration
| Env var | Default | Purpose |
|---------|---------|---------|
| `PORT` | `3000` | HTTP listen port |
| `SERVICE_NAME` | `cloud-dashboard` | Service identifier |
| `REGION` | `us-east-1` | Deployment region |
| `VERSION` | `1.0.0` | Release version |

## Endpoints
- `GET /` — health payload with timestamp
- `GET /info` — runtime configuration and process metadata

## Run
```bash
docker build -t cloud-dashboard .
docker run -p 3000:3000 -e REGION=eu-west-1 cloud-dashboard
```
