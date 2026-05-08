import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-aplicacion/admin/qrapi-tenants",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/admin/list-by-filter",
          label: "List by Filter",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/admin/register-tenant",
          label: "Register Tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/admin/delete-tenant",
          label: "Delete Tenant",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
