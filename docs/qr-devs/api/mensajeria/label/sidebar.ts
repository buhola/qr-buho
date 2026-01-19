import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/mensajeria/label/label",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/label/find-labels",
          label: "Find labels",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/label/handle-labels",
          label: "Handle Labels",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
