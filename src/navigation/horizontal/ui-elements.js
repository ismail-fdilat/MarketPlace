import { Layers, Type, Droplet, Eye, CreditCard, Circle, Briefcase, Box, Layout } from 'react-feather'

export default [
  {
    id: 'uiElements',
    title: 'User Interface',
    icon: <Layers />,
    children: [
      {
        id: 'typography',
        title: 'Typography',
        icon: <Type />,
        navLink: '/admin/ui-element/typography'
      },
      {
        id: 'colors',
        title: 'Colors',
        icon: <Droplet />,
        navLink: '/admin/colors/colors'
      },
      {
        id: 'feather',
        title: 'Feather',
        icon: <Eye />,
        navLink: '/admin/icons/reactfeather'
      },
      {
        id: 'cards',
        title: 'Card',
        icon: <CreditCard />,
        badge: 'success',
        badgeText: 'New',
        children: [
          {
            id: 'basic',
            title: 'Basic',
            icon: <Circle />,
            navLink: '/admin/cards/basic'
          },
          {
            id: 'cardAdvance',
            title: 'Advance',
            icon: <Circle />,
            navLink: '/admin/cards/advance'
          },
          {
            id: 'cardStatistics',
            title: 'Statistics',
            icon: <Circle />,
            navLink: '/admin/cards/statistics'
          },
          {
            id: 'CardAnalytics',
            title: 'Analytics',
            icon: <Circle />,
            navLink: '/admin/cards/analytics'
          },
          {
            id: 'cardActions',
            title: 'Actions',
            icon: <Circle />,
            navLink: '/admin/cards/action'
          }
        ]
      },
      {
        id: 'components',
        title: 'Components',
        icon: <Briefcase />,
        children: [
          {
            id: 'alerts',
            title: 'Alerts',
            icon: <Circle />,
            navLink: '/admin/components/alerts'
          },
          {
            id: 'autoComplete',
            title: 'Auto Complete',
            icon: <Circle />,
            navLink: '/admin/components/auto-complete'
          },
          {
            id: 'avatar',
            title: 'Avatar',
            icon: <Circle />,
            navLink: '/admin/components/avatar'
          },
          {
            id: 'badges',
            title: 'Badges',
            icon: <Circle />,
            navLink: '/admin/components/badges'
          },
          {
            id: 'blockui',
            title: 'BlockUI',
            icon: <Circle />,
            navLink: '/admin/components/blockui'
          },
          {
            id: 'breadCrumbs',
            title: 'Breadcrumbs',
            icon: <Circle />,
            navLink: '/admin/components/breadcrumbs'
          },
          {
            id: 'buttons',
            title: 'Buttons',
            icon: <Circle />,
            navLink: '/admin/components/buttons'
          },
          {
            id: 'carousel',
            title: 'Carousel',
            icon: <Circle />,
            navLink: '/admin/components/carousel'
          },
          {
            id: 'collapse',
            title: 'Collapse',
            icon: <Circle />,
            navLink: '/admin/components/collapse'
          },
          {
            id: 'divider',
            title: 'Divider',
            icon: <Circle />,
            navLink: '/admin/components/divider'
          },
          {
            id: 'dropDowns',
            title: 'Dropdowns',
            icon: <Circle />,
            navLink: '/admin/components/dropdowns'
          },
          {
            id: 'listGroup',
            title: 'List Group',
            icon: <Circle />,
            navLink: '/admin/components/list-group'
          },
          {
            id: 'mediaObjects',
            title: 'Media Objects',
            icon: <Circle />,
            navLink: '/admin/components/media-objects'
          },
          {
            id: 'modals',
            title: 'Modals',
            icon: <Circle />,
            navLink: '/admin/components/modals'
          },
          {
            id: 'navsComponent',
            title: 'Navs Component',
            icon: <Circle />,
            navLink: '/admin/components/nav-component'
          },
          {
            id: 'pagination',
            title: 'Pagination',
            icon: <Circle />,
            navLink: '/admin/components/pagination'
          },
          {
            id: 'pillBadges',
            title: 'Pill Badges',
            icon: <Circle />,
            navLink: '/admin/components/pill-badges'
          },
          {
            id: 'pillsComponent',
            title: 'Pills Component',
            icon: <Circle />,
            navLink: '/admin/components/pills-component'
          },
          {
            id: 'popovers',
            title: 'Popovers',
            icon: <Circle />,
            navLink: '/admin/components/popovers'
          },
          {
            id: 'progress',
            title: 'Progress',
            icon: <Circle />,
            navLink: '/admin/components/progress'
          },
          {
            id: 'spinners',
            title: 'Spinner',
            icon: <Circle />,
            navLink: '/admin/components/spinners'
          },
          {
            id: 'tabsComponent',
            title: 'Tabs Component',
            icon: <Circle />,
            navLink: '/admin/components/tabs-component'
          },
          {
            id: 'timeline',
            title: 'Timeline',
            icon: <Circle />,
            navLink: '/admin/components/timeline'
          },
          {
            id: 'toasts',
            title: 'Toasts',
            icon: <Circle />,
            navLink: '/admin/components/toasts'
          },
          {
            id: 'tooltips',
            title: 'Tooltips',
            icon: <Circle />,
            navLink: '/admin/components/tooltips'
          }
        ]
      },
      {
        id: 'extensions',
        title: 'Extensions',
        icon: <Box />,
        children: [
          {
            id: 'sweetAlert',
            title: 'Sweet Alert',
            icon: <Circle />,
            navLink: '/admin/extensions/sweet-alert'
          },

          {
            id: 'toastr',
            title: 'Toastr',
            icon: <Circle />,
            navLink: '/admin/extensions/toastr'
          },
          {
            id: 'slider',
            title: 'Sliders',
            icon: <Circle />,
            navLink: '/admin/extensions/slider'
          },
          {
            id: 'drag_&_drop',
            title: 'Drag & Drop',
            icon: <Circle />,
            navLink: '/admin/extensions/drag-and-drop'
          },
          {
            id: 'tour',
            title: 'Tour',
            icon: <Circle />,
            navLink: '/admin/extensions/tour'
          },
          {
            id: 'clipBoard',
            title: 'Clipboard',
            icon: <Circle />,
            navLink: '/admin/extensions/clipboard'
          },
          {
            id: 'reactPlayer',
            title: 'React Player',
            icon: <Circle />,
            navLink: '/admin/extensions/react-player'
          },
          {
            id: 'contentMenu',
            title: 'Context Menu',
            icon: <Circle />,
            navLink: '/admin/extensions/context-menu'
          },
          {
            id: 'swiper',
            title: 'Swiper',
            icon: <Circle />,
            navLink: '/admin/extensions/swiper'
          },
          {
            id: 'ratings',
            title: 'Ratings',
            icon: <Circle />,
            navLink: '/admin/extensions/ratings'
          },
          {
            id: 'i18n',
            title: 'I18n',
            icon: <Circle />,
            navLink: '/admin/extensions/i18n'
          },
          {
            id: 'extPagination',
            title: 'React Paginate',
            icon: <Circle />,
            navLink: '/admin/extensions/pagination'
          },
          {
            id: 'extImport',
            title: 'Import',
            icon: <Circle />,
            navLink: '/admin/extensions/import'
          },
          {
            id: 'extExport',
            title: 'Export',
            icon: <Circle />,
            navLink: '/admin/extensions/export'
          },
          {
            id: 'extExportSelected',
            title: 'Export Selected',
            icon: <Circle />,
            navLink: '/admin/extensions/export-selected'
          }
        ]
      },
      {
        id: 'pageLayouts',
        title: 'Page Layouts',
        icon: <Layout />,
        children: [
          {
            id: 'layoutBoxed',
            title: 'Layout Boxed',
            icon: <Circle />,
            navLink: '/admin/page-layout/layout-boxed'
          },
          {
            id: 'withoutMenu',
            title: 'Without Menu',
            icon: <Circle />,
            navLink: '/admin/page-layout/without-menu'
          },
          {
            id: 'layoutEmpty',
            title: 'Layout Empty',
            icon: <Circle />,
            navLink: '/admin/page-layout/layout-empty'
          },
          {
            id: 'layoutBlank',
            title: 'Layout Blank',
            icon: <Circle />,
            navLink: '/admin/page-layout/layout-blank'
          }
        ]
      }
    ]
  }
]
