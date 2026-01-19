import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/mensajeria/devices/qrapi-devices",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/devices/create-device",
          label: "Create Device",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/devices/list-devices",
          label: "List Devices",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/devices/delete-device",
          label: "Delete Device",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/devices/fetch-device",
          label: "Fetch Device",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
