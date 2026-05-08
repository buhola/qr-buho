import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-externa/api-externa-mensajeria-simple",
    },
    {
      type: "category",
      label: "API Externa",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-externa/send-text",
          label: "Enviar Mensaje de Texto",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-externa/send-media",
          label: "Enviar Archivo Multimedia",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-externa/send-pdf",
          label: "Enviar PDF por WhatsApp",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
