import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/admin/plans/qrapi-plans",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/admin/plans/list-by-filter",
          label: "List by filter",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/admin/plans/registrar-plan",
          label: "Registrar Plan",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
