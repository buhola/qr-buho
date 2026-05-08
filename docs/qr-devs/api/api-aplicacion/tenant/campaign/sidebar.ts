import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-aplicacion/tenant/campaign/campanas",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/campaign/crear-campana-manual",
          label: "Crear Campaña Manual",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/campaign/listar-campanas",
          label: "Listar Campañas",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/campaign/detalles-de-campana",
          label: "Detalles de Campaña",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
