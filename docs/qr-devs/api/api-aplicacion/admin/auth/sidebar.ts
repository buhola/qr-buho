import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-aplicacion/admin/auth/qrapi-reseller",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/admin/auth/login",
          label: "Login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/admin/auth/verify-token",
          label: "Verify token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/admin/auth/register",
          label: "Register",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/admin/auth/user",
          label: "User",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
