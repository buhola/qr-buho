---
sidebar_position: 1
title: Dominio no carga
---

# ¿Qué hacer si el dominio de mi cliente no carga?

Si el dominio de tu cliente no responde o no carga correctamente, sigue estos pasos para reiniciar los servicios:

1. Accede a tu servidor/VPS.
2. Ingresa a la carpeta del proyecto `qrapi_1`:
   ```bash
   cd qrapi_1
   ```
3. Reinicia los contenedores ejecutando los siguientes comandos:
   ```bash
   docker compose down
   docker compose up -d
   ```
   _(Nota: Si usas una versión antigua de Docker, usa `docker-compose` en lugar de `docker compose`)_

Esto reiniciará los servicios y debería solucionar problemas de conectividad o bloqueo de contenedores.
