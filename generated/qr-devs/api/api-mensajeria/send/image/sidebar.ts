import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-mensajeria/send/image/enviar-imagen",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/image/enviar-imagen",
          label: "Enviar imagen",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
