import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/mensajeria/send_message/send-message",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/send_message/button",
          label: "Button",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
