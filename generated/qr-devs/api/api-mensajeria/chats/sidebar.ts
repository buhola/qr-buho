import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "qr-devs/api/api-mensajeria/chats/chat",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/check-is-whats-app-number",
          label: "Check is WhatsApp Number",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/read-messages",
          label: "Read Messages",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/archive-chat",
          label: "Archive Chat",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/mark-chat-unread",
          label: "Mark Chat Unread",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/delete-message",
          label: "Delete Message",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/fetch-profile-picture-copy",
          label: "Fetch Profile Picture Copy",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/get-base-64-from-media-message-copy",
          label: "Get Base64 From Media Message Copy",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/update-message",
          label: "Update Message",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/send-presence",
          label: "Send Presence",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/update-block-status",
          label: "Update Block Status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/find-contacts",
          label: "Find Contacts",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/find-messages",
          label: "Find Messages",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/find-status-message",
          label: "Find Status Message",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/chats/find-chats",
          label: "Find Chats",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
