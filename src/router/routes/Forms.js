import { lazy } from 'react'

const FormRoutes = [
  {
    path: '/admin/forms/elements/input',
    component: lazy(() => import('../../views/forms/form-elements/input'))
  },
  {
    path: '/admin/forms/elements/input-group',
    component: lazy(() => import('../../views/forms/form-elements/input-groups'))
  },
  {
    path: '/admin/forms/elements/input-mask',
    component: lazy(() => import('../../views/forms/form-elements/input-mask'))
  },
  {
    path: '/admin/forms/elements/textarea',
    component: lazy(() => import('../../views/forms/form-elements/textarea'))
  },
  {
    path: '/admin/forms/elements/checkbox',
    component: lazy(() => import('../../views/forms/form-elements/checkboxes'))
  },
  {
    path: '/admin/forms/elements/radio',
    component: lazy(() => import('../../views/forms/form-elements/radio'))
  },
  {
    path: '/admin/forms/elements/switch',
    component: lazy(() => import('../../views/forms/form-elements/switch'))
  },
  {
    path: '/admin/forms/elements/select',
    component: lazy(() => import('../../views/forms/form-elements/select'))
  },
  {
    path: '/admin/forms/elements/number-input',
    component: lazy(() => import('../../views/forms/form-elements/number-input'))
  },
  {
    path: '/admin/forms/elements/file-uploader',
    component: lazy(() => import('../../views/forms/form-elements/file-uploader'))
  },
  {
    path: '/admin/forms/elements/editor',
    component: lazy(() => import('../../views/forms/form-elements/editor'))
  },
  {
    path: '/admin/forms/elements/pickers',
    component: lazy(() => import('../../views/forms/form-elements/datepicker'))
  },
  {
    path: '/admin/forms/layout/form-layout',
    component: lazy(() => import('../../views/forms/form-layouts'))
  },
  {
    path: '/admin/forms/wizard',
    component: lazy(() => import('../../views/forms/wizard'))
  },
  {
    path: '/admin/forms/react-hook-form',
    component: lazy(() => import('../../views/forms/validations/react-hook-form'))
  },
  {
    path: '/admin/forms/reactstrap-validation',
    component: lazy(() => import('../../views/forms/validations/reactstrap'))
  },
  {
    path: '/admin/forms/form-repeater',
    component: lazy(() => import('../../views/forms/form-repeater'))
  }
]

export default FormRoutes
