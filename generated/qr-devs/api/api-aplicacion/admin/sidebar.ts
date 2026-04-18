import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-aplicacion/admin/qrapi-plans",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/admin/list-by-filter",
          label: "List by filter",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/admin/registrar-plan",
          label: "Registrar Plan",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
