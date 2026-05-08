import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-aplicacion/tenant/auth/autenticacion",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/auth/login-de-tenant",
          label: "Login de Tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/auth/verificar-token-de-tenant",
          label: "Verificar token de Tenant",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
