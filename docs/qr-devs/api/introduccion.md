---
sidebar_position: 0
title: Introducción
---

# Introducción a la API de QR Buho

Bienvenido a la documentación oficial de la API de **QR Buho**. Esta referencia te permitirá integrar nuestras funcionalidades de gestión multi-empresa y mensajería de WhatsApp directamente en tus aplicaciones.

La API está dividida en dos grandes secciones según el rol del usuario: **Admin (Reseller)** y **Tenant (Cliente Final)**.

## 🌍 URLs Base

Dependiendo del contexto de la operación, deberás utilizar una de las siguientes URLs base:

| Rol        | Descripción                                                          | URL Base                      | Ejemplo                                     |
| :--------- | :------------------------------------------------------------------- | :---------------------------- | :------------------------------------------ |
| **Admin**  | Para gestión de planes, tenants y configuración global.              | `https://qr.buho.la`          | `https://qr.buho.la/api/plan/list`          |
| **Tenant** | Para operaciones de una empresa específica (mensajes, dispositivos). | `https://{tenant_id}.buho.la` | `https://empresa1.buho.la/api/devices/list` |

:::tip Dinamismo
En la documentación interactiva, puedes cambiar el valor de `{tenant_id}` (por defecto `demo`) para probar las peticiones contra tu propio subdominio.
:::

## 🔐 Autenticación

La mayoría de los endpoints están protegidos y requieren autenticación mediate **Bearer Token**.

### Pasos para autenticarse

1.  Obtén tu token de acceso realizando una petición al endpoint de **Login**:
    - **Admin:** `/auth/login` (Sección Reseller)
    - **Tenant:** `/api/auth/login` (Generalmente gestionado internamente o vía panel)

2.  Incluye el token en el encabezado `Authorization` de tus peticiones HTTP:

```http
Authorization: Bearer <tu_token_de_acceso>
Content-Type: application/json
```

## 📚 Módulos Disponibles

### API Admin (Reseller)

Diseñada para los administradores del sistema SaaS.

- **Reseller (Auth):** Gestión de sesión y registro de administradores.
- **Tenants:** Creación, listado y administración de las empresas clientes.
- **Plans:** Gestión de los planes de suscripción ofrecidos.

### API Tenant (Cliente)

Utilizada por las empresas para operar sus servicios de WhatsApp.

- **Devices:** Vinculación y gestión de sesiones de WhatsApp (QR).
- **Campaigns:** Creación de campañas de mensajería masiva.
- **Send Message:** Envío individual de mensajes (texto, media).
- **Chat / Group:** Gestión de chats y grupos de WhatsApp.
- **Contacts / Label:** Administración de etiquetas y contactos.

## 🚀 Primeros Pasos

Si eres un desarrollador integrando **QR Buho**, te recomendamos comenzar explorando la sección **[Mensajería > Devices](./mensajeria/devices/qrapi-devices.info.mdx)** para entender cómo conectar una sesión de WhatsApp, y luego probar el **[Envío de Mensajes](./mensajeria/send_message/send-message.info.mdx)**.
