import { FileText, Circle } from 'react-feather'
export default [
  {
    id: 'pages',
    title: 'Pages',
    icon: <FileText size={20} />,
    children: [
      {
        id: 'authentication',
        title: 'Authentication',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'login-v1',
            title: 'Login v1',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/login-v1',
            newTab: true
          },
          {
            id: 'login-v2',
            title: 'Login v2',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/login-v2',
            newTab: true
          },
          {
            id: 'register-v1',
            title: 'Register v1',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/register-v1',
            newTab: true
          },
          {
            id: 'register-v2',
            title: 'Register v2',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/register-v2',
            newTab: true
          },
          {
            id: 'forgotPassword-v1',
            title: 'Forgot Password v1',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/forgot-password-v1',
            newTab: true
          },
          {
            id: 'forgotPassword-v2',
            title: 'Forgot Password v2',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/forgot-password-v2',
            newTab: true
          },
          {
            id: 'resetPassword-v1',
            title: 'Reset Password v1',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/reset-password-v1',
            newTab: true
          },
          {
            id: 'resetPassword-v2',
            title: 'Reset Password v2',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/reset-password-v2',
            newTab: true
          }
        ]
      },
      {
        id: 'accountSettings',
        title: 'Account Settings',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/admin/pages/account-settings'
      },
      {
        id: 'profile',
        title: 'Profile',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/admin/pages/profile',
        collapsed: true
      },
      {
        id: 'faq',
        title: 'FAQ',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/admin/pages/faq'
      },
      {
        id: 'knowledgeBase',
        title: 'Knowledge Base',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/admin/pages/knowledge-base',
        parentOf: ['/admin/pages/knowledge-base/category/questions', '/admin/pages/knowledge-base/category']
      },
      {
        id: 'pricing',
        title: 'Pricing',
        icon: <Circle size={12} />,
        permissions: ['admin', 'editor'],
        navLink: '/admin/pages/pricing'
      },
      {
        id: 'blog',
        title: 'Blog',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'blogList',
            title: 'List',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/blog/list'
          },
          {
            id: 'blogDetail',
            title: 'Detail',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/blog/detail'
          },
          {
            id: 'blogEdit',
            title: 'Edit',
            permissions: ['admin', 'editor'],
            navLink: '/admin/pages/blog/edit'
          }
        ]
      },
      {
        id: 'mailTemplate',
        title: 'Mail Template',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'welcomeTemp',
            title: 'Welcome',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-welcome.html',
            externalLink: true
          },
          {
            id: 'resetPassTemp',
            title: 'Reset Password',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-reset-password.html',
            externalLink: true
          },
          {
            id: 'verifyEmailTemp',
            title: 'Verify Email',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-verify-email.html',
            externalLink: true
          },
          {
            id: 'deactivateAccountTemp',
            title: 'Deactivate Account',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-deactivate-account.html',
            externalLink: true
          },
          {
            id: 'invoiceMailTemp',
            title: 'Invoice',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-invoice.html',
            externalLink: true
          },
          {
            id: 'promotionalMailTemp',
            title: 'Promotional',
            permissions: ['admin', 'editor'],
            navLink: 'https://pixinvent.com/demo/vuexy-mail-template/mail-promotional.html',
            externalLink: true
          }
        ]
      },
      {
        id: 'miscellaneous',
        title: 'Miscellaneous',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'comingSoon',
            title: 'Coming Soon',
            permissions: ['admin', 'editor'],
            navLink: '/admin/misc/coming-soon',
            newTab: true
          },

          {
            id: 'notAuthorized',
            title: 'Not Authorized',
            permissions: ['admin', 'editor'],
            navLink: '/admin/misc/not-authorized',
            newTab: true
          },
          {
            id: 'maintenance',
            title: 'Maintenance',
            permissions: ['admin', 'editor'],
            navLink: '/admin/misc/maintenance',
            newTab: true
          },
          {
            id: 'error',
            title: 'Error',
            permissions: ['admin', 'editor'],
            navLink: '/admin/misc/error',
            newTab: true
          }
        ]
      }
    ]
  }
]
