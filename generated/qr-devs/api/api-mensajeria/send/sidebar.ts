import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-mensajeria/send/send-message",
    },
    {
      type: "category",
      label: "Send",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/send-message",
          label: "Send Message",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
