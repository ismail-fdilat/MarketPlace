import { Type, Droplet, Eye, CreditCard, Circle, Briefcase, Box, Layout } from 'react-feather'

export default [
  {
    header: 'User Interface'
  },
  {
    id: 'typography',
    title: 'Typography',
    icon: <Type size={12} />,
    navLink: '/admin/ui-element/typography'
  },
  {
    id: 'colors',
    title: 'Colors',
    icon: <Droplet size={20} />,
    navLink: '/admin/colors/colors'
  },
  {
    id: 'feather',
    title: 'Feather',
    icon: <Eye size={20} />,
    navLink: '/admin/icons/reactfeather'
  },
  {
    id: 'cards',
    title: 'Card',
    icon: <CreditCard size={20} />,
    badge: 'light-success',
    badgeText: 'New',
    children: [
      {
        id: 'basic',
        title: 'Basic',
        icon: <Circle size={12} />,
        navLink: '/admin/cards/basic'
      },
      {
        id: 'cardAdvance',
        title: 'Advance',
        icon: <Circle size={12} />,
        navLink: '/admin/cards/advance'
      },
      {
        id: 'cardStatistics',
        title: 'Statistics',
        icon: <Circle size={12} />,
        navLink: '/admin/cards/statistics'
      },
      {
        id: 'CardAnalytics',
        title: 'Analytics',
        icon: <Circle size={12} />,
        navLink: '/admin/cards/analytics'
      },
      {
        id: 'cardActions',
        title: 'Actions',
        icon: <Circle size={12} />,
        navLink: '/admin/cards/action'
      }
    ]
  },
  {
    id: 'components',
    title: 'Components',
    icon: <Briefcase size={20} />,
    children: [
      {
        id: 'alerts',
        title: 'Alerts',
        icon: <Circle size={12} />,
        navLink: '/admin/components/alerts'
      },
      {
        id: 'autoComplete',
        title: 'Auto Complete',
        icon: <Circle size={12} />,
        navLink: '/admin/components/auto-complete'
      },
      {
        id: 'avatar',
        title: 'Avatar',
        icon: <Circle size={12} />,
        navLink: '/admin/components/avatar'
      },
      {
        id: 'badges',
        title: 'Badges',
        icon: <Circle size={12} />,
        navLink: '/admin/components/badges'
      },
      {
        id: 'blockui',
        title: 'BlockUI',
        icon: <Circle size={12} />,
        navLink: '/admin/components/blockui'
      },
      {
        id: 'breadCrumbs',
        title: 'Breadcrumbs',
        icon: <Circle size={12} />,
        navLink: '/admin/components/breadcrumbs'
      },
      {
        id: 'buttons',
        title: 'Buttons',
        icon: <Circle size={12} />,
        navLink: '/admin/components/buttons'
      },
      {
        id: 'carousel',
        title: 'Carousel',
        icon: <Circle size={12} />,
        navLink: '/admin/components/carousel'
      },
      {
        id: 'collapse',
        title: 'Collapse',
        icon: <Circle size={12} />,
        navLink: '/admin/components/collapse'
      },
      {
        id: 'divider',
        title: 'Divider',
        icon: <Circle size={12} />,
        navLink: '/admin/components/divider'
      },
      {
        id: 'dropDowns',
        title: 'Dropdowns',
        icon: <Circle size={12} />,
        navLink: '/admin/components/dropdowns'
      },
      {
        id: 'listGroup',
        title: 'List Group',
        icon: <Circle size={12} />,
        navLink: '/admin/components/list-group'
      },
      {
        id: 'mediaObjects',
        title: 'Media Objects',
        icon: <Circle size={12} />,
        navLink: '/admin/components/media-objects'
      },
      {
        id: 'modals',
        title: 'Modals',
        icon: <Circle size={12} />,
        navLink: '/admin/components/modals'
      },
      {
        id: 'navsComponent',
        title: 'Navs Component',
        icon: <Circle size={12} />,
        navLink: '/admin/components/nav-component'
      },
      {
        id: 'pagination',
        title: 'Pagination',
        icon: <Circle size={12} />,
        navLink: '/admin/components/pagination'
      },
      {
        id: 'pillBadges',
        title: 'Pill Badges',
        icon: <Circle size={12} />,
        navLink: '/admin/components/pill-badges'
      },
      {
        id: 'pillsComponent',
        title: 'Pills Component',
        icon: <Circle size={12} />,
        navLink: '/admin/components/pills-component'
      },
      {
        id: 'popovers',
        title: 'Popovers',
        icon: <Circle size={12} />,
        navLink: '/admin/components/popovers'
      },
      {
        id: 'progress',
        title: 'Progress',
        icon: <Circle size={12} />,
        navLink: '/admin/components/progress'
      },
      {
        id: 'spinners',
        title: 'Spinner',
        icon: <Circle size={12} />,
        navLink: '/admin/components/spinners'
      },
      {
        id: 'tabsComponent',
        title: 'Tabs Component',
        icon: <Circle size={12} />,
        navLink: '/admin/components/tabs-component'
      },
      {
        id: 'timeline',
        title: 'Timeline',
        icon: <Circle size={12} />,
        navLink: '/admin/components/timeline'
      },
      {
        id: 'toasts',
        title: 'Toasts',
        icon: <Circle size={12} />,
        navLink: '/admin/components/toasts'
      },
      {
        id: 'tooltips',
        title: 'Tooltips',
        icon: <Circle size={12} />,
        navLink: '/admin/components/tooltips'
      }
    ]
  },
  {
    id: 'extensions',
    title: 'Extensions',
    icon: <Box size={20} />,
    children: [
      {
        id: 'sweetAlert',
        title: 'Sweet Alert',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/sweet-alert'
      },
      {
        id: 'toastr',
        title: 'Toastr',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/toastr'
      },
      {
        id: 'slider',
        title: 'Sliders',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/slider'
      },
      {
        id: 'drag_&_drop',
        title: 'Drag & Drop',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/drag-and-drop'
      },
      {
        id: 'tour',
        title: 'Tour',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/tour'
      },
      {
        id: 'clipBoard',
        title: 'Clipboard',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/clipboard'
      },
      {
        id: 'reactPlayer',
        title: 'React Player',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/react-player'
      },
      {
        id: 'contentMenu',
        title: 'Context Menu',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/context-menu'
      },
      {
        id: 'swiper',
        title: 'Swiper',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/swiper'
      },
      {
        id: 'ratings',
        title: 'Ratings',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/ratings'
      },
      {
        id: 'i18n',
        title: 'I18n',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/i18n'
      },
      {
        id: 'extPagination',
        title: 'React Paginate',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/pagination'
      },
      {
        id: 'extImport',
        title: 'Import',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/import'
      },
      {
        id: 'extExport',
        title: 'Export',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/export'
      },
      {
        id: 'extExportSelected',
        title: 'Export Selected',
        icon: <Circle size={12} />,
        navLink: '/admin/extensions/export-selected'
      }
    ]
  },
  {
    id: 'pageLayouts',
    title: 'Page Layouts',
    icon: <Layout size={20} />,
    children: [
      {
        id: 'collapsedMenu',
        title: 'Collapsed Menu',
        icon: <Circle size={12} />,
        navLink: '/admin/page-layout/collapse-menu'
      },
      {
        id: 'layoutBoxed',
        title: 'Layout Boxed',
        icon: <Circle size={12} />,
        navLink: '/admin/page-layout/layout-boxed'
      },
      {
        id: 'withoutMenu',
        title: 'Without Menu',
        icon: <Circle size={12} />,
        navLink: '/admin/page-layout/without-menu'
      },
      {
        id: 'layoutEmpty',
        title: 'Layout Empty',
        icon: <Circle size={12} />,
        navLink: '/admin/page-layout/layout-empty'
      },
      {
        id: 'layoutBlank',
        title: 'Layout Blank',
        icon: <Circle size={12} />,
        navLink: '/admin/page-layout/layout-blank'
      }
    ]
  }
]
