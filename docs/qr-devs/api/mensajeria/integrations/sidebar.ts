import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/mensajeria/integrations/integrations",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/integrations/set",
          label: "Set",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
