import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-externa/enviar-mensaje/api-de-mensajeria",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-externa/enviar-mensaje/enviar-mensaje",
          label: "Enviar mensaje de texto por WhatsApp",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
