import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-aplicacion/tenant/device/dispositivos",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/device/crear-dispositivo",
          label: "Crear Dispositivo",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/device/listar-dispositivos",
          label: "Listar Dispositivos",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/device/detalles-de-dispositivo",
          label: "Detalles de Dispositivo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/device/conectar-instancia",
          label: "Conectar Instancia",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/device/eliminar-dispositivo",
          label: "Eliminar Dispositivo",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
