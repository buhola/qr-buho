import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-aplicacion/tenant/campaign/qrapi-campaigns",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/campaign/create-manual-campaign",
          label: "Create manual campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/campaign/create-excel-campaign",
          label: "Create excel campaign",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-aplicacion/tenant/campaign/campaign-details",
          label: "Campaign Details",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
