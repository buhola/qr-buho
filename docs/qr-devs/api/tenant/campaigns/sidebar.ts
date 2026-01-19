import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/tenant/campaigns/qrapi-campaigns",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/tenant/campaigns/create-manual-campaign",
          label: "Create manual campaign",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/tenant/campaigns/create-excel-campaign",
          label: "Create excel campaign",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/tenant/campaigns/campaign-details",
          label: "Campaign Details",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
