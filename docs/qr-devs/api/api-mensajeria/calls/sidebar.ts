import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-mensajeria/calls/call",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/calls/fake-call",
          label: "Fake Call",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
