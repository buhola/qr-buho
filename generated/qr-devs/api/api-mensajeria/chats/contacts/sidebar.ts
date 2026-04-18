import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-mensajeria/chats/contacts/qrapi-chats",
    },
    {
      type: "category",
      label: "Chats",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/contacts/find-contacts",
          label: "Extraer contactos",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
