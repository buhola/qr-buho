import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Enviar Mensajes",
      items: [
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/text/enviar-mensaje-de-texto",
          label: "Enviar mensaje de texto",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/image/enviar-imagen",
          label: "Enviar imagen",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/video/enviar-video",
          label: "Enviar video",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/audio/enviar-audio",
          label: "Enviar audio",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/document/enviar-documento",
          label: "Enviar documento",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/buttons/enviar-botones",
          label: "Enviar botones",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/contact/enviar-contacto",
          label: "Enviar contacto",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/list/enviar-lista",
          label: "Enviar lista",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/location/enviar-ubicacion",
          label: "Enviar ubicación",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/poll/enviar-encuesta",
          label: "Enviar encuesta",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "qr-devs/api/api-mensajeria/send/ptv/enviar-ptv",
          label: "Enviar PTV",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;