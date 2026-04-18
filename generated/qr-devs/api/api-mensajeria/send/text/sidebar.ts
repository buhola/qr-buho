import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-mensajeria/send/text/enviar-mensaje-de-texto",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/text/enviar-mensaje-de-texto",
          label: "Enviar mensaje de texto",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
