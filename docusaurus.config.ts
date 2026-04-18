import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Manual QR Buho',
  tagline: 'Manual de QR Buho',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://manual.waya.uio.la',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'buhola', // Usually your GitHub org/user name.
  projectName: 'qr-buho', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          //sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: "/",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editUrl:
            'https://github.com/buhola/qr-buho/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],
  
  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "qr_api",
        docsPluginId: "classic",
        config: {
          integrations: {
            specPath: "api/integrations.yaml",
            outputDir: "generated/qr-devs/api/api-mensajeria/integrations",
            baseUrl: "/qr-devs/api/api-mensajeria/integrations",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          call: {
            specPath: "api/call.yaml",
            outputDir: "generated/qr-devs/api/api-mensajeria/calls",
            baseUrl: "/qr-devs/api/api-mensajeria/calls",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          chat: {
            specPath: "api/chat.yaml",
            outputDir: "generated/qr-devs/api/api-mensajeria/chats",
            baseUrl: "/qr-devs/api/api-mensajeria/chats",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          group: {
            specPath: "api/group.yaml",
            outputDir: "generated/qr-devs/api/api-mensajeria/groups",
            baseUrl: "/qr-devs/api/api-mensajeria/groups",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          label: {
            specPath: "api/label.yaml",
            outputDir: "generated/qr-devs/api/api-mensajeria/label",
            baseUrl: "/qr-devs/api/api-mensajeria/label",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          // Application APIs
          devices: {
            specPath: "api/devices.yaml",
            outputDir: "generated/qr-devs/api/api-aplicacion/tenant/device",
            baseUrl: "/qr-devs/api/api-aplicacion/tenant/device",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          campaigns: {
            specPath: "api/campaigns.yaml",
            outputDir: "generated/qr-devs/api/api-aplicacion/tenant/campaign",
            baseUrl: "/qr-devs/api/api-aplicacion/tenant/campaign",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          reseller: {
            specPath: "api/reseller.yaml",
            outputDir: "generated/qr-devs/api/api-aplicacion/admin/auth",
            baseUrl: "/qr-devs/api/api-aplicacion/admin/auth",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          plans: {
            specPath: "api/plans.yaml",
            outputDir: "generated/qr-devs/api/api-aplicacion/admin",
            baseUrl: "/qr-devs/api/api-aplicacion/admin",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          tenants: {
            specPath: "api/tenants.yaml",
            outputDir: "generated/qr-devs/api/api-aplicacion/admin",
            baseUrl: "/qr-devs/api/api-aplicacion/admin",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          enviarPDF: {
            specPath: "api/Enviarpdf/enviarPDF.yaml",
            outputDir: "generated/qr-devs/api/api-externa/enviar-pdf",
            baseUrl: "/qr-devs/api/api-externa/enviar-pdf",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          enviarMultimedia: {
            specPath: "api/Enviarmultimedia/enviarMultimedia.yaml",
            outputDir: "generated/qr-devs/api/api-externa/enviar-multimedia",
            baseUrl: "/qr-devs/api/api-externa/enviar-multimedia",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          contacts: {
            specPath: "api/contacts.yaml",
            outputDir: "generated/qr-devs/api/api-mensajeria/chats/contacts",
            baseUrl: "/qr-devs/api/api-mensajeria/chats/contacts",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
          send_text: {
            specPath: "api/Send/send-text.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/text",
            baseUrl: "/qr-devs/api/api-mensajeria/send/text",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

          send_image: {
            specPath: "api/Send/send-image.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/image",
            baseUrl: "/qr-devs/api/api-mensajeria/send/image",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

          send_video: {
            specPath: "api/Send/send-video.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/video",
            baseUrl: "/qr-devs/api/api-mensajeria/send/video",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

          send_document: {
            specPath: "api/Send/send-document.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/document",
            baseUrl: "/qr-devs/api/api-mensajeria/send/document",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

          send_audio: {
            specPath: "api/Send/send-audio.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/audio",
            baseUrl: "/qr-devs/api/api-mensajeria/send/audio",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

          send_ptv: {
            specPath: "api/Send/send-ptv.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/ptv",
            baseUrl: "/qr-devs/api/api-mensajeria/send/ptv",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

          send_location: {
            specPath: "api/Send/send-location.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/location",
            baseUrl: "/qr-devs/api/api-mensajeria/send/location",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

          send_contact: {
            specPath: "api/Send/send-contact.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/contact",
            baseUrl: "/qr-devs/api/api-mensajeria/send/contact",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

          send_poll: {
            specPath: "api/Send/send-poll.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/poll",
            baseUrl: "/qr-devs/api/api-mensajeria/send/poll",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

          send_buttons: {
            specPath: "api/Send/send-buttons.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/buttons",
            baseUrl: "/qr-devs/api/api-mensajeria/send/buttons",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },

          send_list: {
            specPath: "api/Send/send-list.yml",
            outputDir: "generated/qr-devs/api/api-mensajeria/send/list",
            baseUrl: "/qr-devs/api/api-mensajeria/send/list",
            sidebarOptions: {
              groupPathsBy: "tag",
            },
          },
        }
      }
    ]
  ],

  themes: [
    "docusaurus-theme-openapi-docs",
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'WaYa',
      logo: {
        alt: 'Qr Buho Logo',
        src: 'img/logo.svg',
      },
      items: [
        /*{
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Manual',
        },*/
        //{to: '/blog', label: 'Blog', position: 'left'},
        //{
        //  href: 'https://github.com/facebook/docusaurus',
        //  label: 'GitHub',
        //  position: 'right',
        //},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        /*{
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },*/
      ],
      //copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
