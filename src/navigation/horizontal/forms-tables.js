import { Edit, Copy, Circle, Box, Package, CheckCircle, RotateCw, Server, Grid } from 'react-feather'

export default [
  {
    id: 'formsAndTable',
    title: 'Forms & Tables',
    icon: <Edit />,
    children: [
      {
        id: 'formElements',
        title: 'Form Elements',
        icon: <Copy />,
        children: [
          {
            id: 'input',
            title: 'Input',
            icon: <Circle />,
            navLink: '/admin/forms/elements/input'
          },
          {
            id: 'inputGroup',
            title: 'Input Groups',
            icon: <Circle />,
            navLink: '/admin/forms/elements/input-group'
          },
          {
            id: 'inputMask',
            title: 'Input Mask',
            icon: <Circle />,
            navLink: '/admin/forms/elements/input-mask'
          },
          {
            id: 'textarea',
            title: 'Textarea',
            icon: <Circle />,
            navLink: '/admin/forms/elements/textarea'
          },
          {
            id: 'checkbox',
            title: 'Checkbox',
            icon: <Circle />,
            navLink: '/admin/forms/elements/checkbox'
          },
          {
            id: 'radio',
            title: 'Radio',
            icon: <Circle />,
            navLink: '/admin/forms/elements/radio'
          },
          {
            id: 'switch',
            title: 'Switch',
            icon: <Circle />,
            navLink: '/admin/forms/elements/switch'
          },
          {
            id: 'select',
            title: 'Select',
            icon: <Circle />,
            navLink: '/admin/forms/elements/select'
          },
          {
            id: 'numberInput',
            title: 'Number Input',
            icon: <Circle />,
            navLink: '/admin/forms/elements/number-input'
          },
          {
            id: 'fileUploader',
            title: 'File Uploader',
            icon: <Circle />,
            navLink: '/admin/forms/elements/file-uploader'
          },
          {
            id: 'quillEditor',
            title: 'Editor',
            icon: <Circle />,
            navLink: '/admin/forms/elements/editor'
          },
          {
            id: 'date_&_timePicker',
            title: 'Date & Time Picker',
            icon: <Circle />,
            navLink: '/admin/forms/elements/pickers'
          }
        ]
      },
      {
        id: 'formLayouts',
        title: 'Form Layout',
        icon: <Box />,
        navLink: '/admin/forms/layout/form-layout'
      },
      {
        id: 'wizard',
        title: 'Form Wizard',
        icon: <Package />,
        navLink: '/admin/forms/wizard'
      },
      {
        id: 'formValidation',
        title: 'Form Validation',
        icon: <CheckCircle />,
        children: [
          {
            id: 'reactHookForm',
            title: 'React Hook Form',
            icon: <Circle />,
            navLink: '/admin/forms/react-hook-form'
          },
          {
            id: 'reactstrapVal',
            title: 'Reactstrap',
            icon: <Circle />,
            navLink: '/admin/forms/reactstrap-validation'
          }
        ]
      },
      {
        id: 'formRepeater',
        title: 'Form Repeater',
        icon: <RotateCw />,
        navLink: '/admin/forms/form-repeater'
      },
      {
        id: 'tablesReactstrap',
        title: 'Table',
        icon: <Server />,
        navLink: '/admin/tables/reactstrap'
      },
      {
        id: 'dataTable',
        title: 'DataTable',
        icon: <Grid />,
        children: [
          {
            id: 'dtBasic',
            title: 'Basic',
            icon: <Circle />,
            navLink: '/admin/datatables/basic'
          },
          {
            id: 'dtAdvance',
            title: 'Advanced',
            icon: <Circle />,
            navLink: '/admin/datatables/advance'
          }
        ]
      }
    ]
  }
]
