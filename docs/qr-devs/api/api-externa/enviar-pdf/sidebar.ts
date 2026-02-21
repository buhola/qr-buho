import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-externa/enviar-pdf/api-de-mensajeria",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-externa/enviar-pdf/enviar-pdf",
          label: "Enviar PDF por WhatsApp",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
