import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-aplicacion/tenant/device/qrapi-devices",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/device/create-device",
          label: "Create Device",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/device/list-devices",
          label: "List Devices",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/device/delete-device",
          label: "Delete Device",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/device/fetch-device",
          label: "Fetch Device",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
