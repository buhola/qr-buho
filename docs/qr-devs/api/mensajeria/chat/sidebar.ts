import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/mensajeria/chat/chat",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/check-is-whats-app-number",
          label: "Check is WhatsApp Number",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/read-messages",
          label: "Read Messages",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/archive-chat",
          label: "Archive Chat",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/mark-chat-unread",
          label: "Mark Chat Unread",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/delete-message",
          label: "Delete Message",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/fetch-profile-picture-copy",
          label: "Fetch Profile Picture Copy",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/get-base-64-from-media-message-copy",
          label: "Get Base64 From Media Message Copy",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/update-message",
          label: "Update Message",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/send-presence",
          label: "Send Presence",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/update-block-status",
          label: "Update Block Status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/find-contacts",
          label: "Find Contacts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/find-messages",
          label: "Find Messages",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/find-status-message",
          label: "Find Status Message",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/mensajeria/chat/find-chats",
          label: "Find Chats",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
