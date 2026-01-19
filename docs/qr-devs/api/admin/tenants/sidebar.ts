import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/admin/tenants/qrapi-tenants",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/admin/tenants/list-by-filter",
          label: "List by Filter",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/admin/tenants/register-tenant",
          label: "Register Tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/admin/tenants/delete-tenant",
          label: "Delete Tenant",
          className: "api-method delete",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
