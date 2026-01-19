import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/admin/reseller/qrapi-reseller",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/admin/reseller/login",
          label: "Login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/admin/reseller/verify-token",
          label: "Verify token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/admin/reseller/register",
          label: "Register",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/admin/reseller/user",
          label: "User",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
