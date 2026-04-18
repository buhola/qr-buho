import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-externa/enviar-multimedia/api-de-mensajeria",
    },
    {
      type: "category",
      label: "api",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-externa/enviar-multimedia/enviar-multimedia",
          label: "Enviar archivo multimedia por WhatsApp",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
