import * as Yup from 'yup'


export let schema = Yup.object().shape({
    day: Yup.number().required().min(1).max(31),
    month: Yup.number().required().min(1).max(12),
    post: Yup.string().required(),
    content: Yup.string().required(),
    checkbox: Yup.bool().oneOf([true], 'Field must be checked')
  })
