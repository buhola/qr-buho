import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-mensajeria/groups/group",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/create-group",
          label: "Create Group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/update-group-picture",
          label: "Update Group Picture",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/fetch-all-groups",
          label: "Fetch All Groups",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/find-group-by-jid",
          label: "Find Group by Jid",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/find-participants",
          label: "Find Participants",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/leave-group",
          label: "Leave Group",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/update-group-name",
          label: "Update Group Name",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/update-group-description",
          label: "Update Group Description",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/update-participant",
          label: "Update Participant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/toggle-ephemeral",
          label: "Toggle Ephemeral",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/fetch-invite-code",
          label: "Fetch Invite Code",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/find-group-by-invited-code",
          label: "Find group by invited code",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/revoke-invite-code",
          label: "Revoke Invite Code",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/send-invite-url",
          label: "Send Invite Url",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/groups/update-settings",
          label: "Update settings",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
