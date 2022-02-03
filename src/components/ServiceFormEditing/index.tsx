import {
  AccountCircle,
  Money,
} from '@styled-icons/material-outlined'
import useRequest, { useRequestConfig } from 'hooks/useRequest'
import TextField from 'components/TextField'
import Button from 'components/Button'
import * as S from './styles'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { signInServiceValidate, FieldErrors } from 'utils/validations'
import { currencyMask } from './maskinut'
import { toast } from 'react-toastify'
import Router from 'next/router'
import { ServiceConsultancyEditing } from 'templates/EditingService'

export type ProviderFormType = {
  setRegisteredService?: Function
  registeredService?: Boolean
  setServiceAndProvider?: Function
  service?: ServiceConsultancyEditing
}

const ProviderForm = ({ setRegisteredService, registeredService, setServiceAndProvider, service }: ProviderFormType) => {
  const [formDataThumbnail, setformDataThumbnail] = useState<null | FormData>(null)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const { request } = useRequest()
  const [values, setValues] = useState<ServiceConsultancyEditing | null>(null)

  useEffect(() => {
    if (service) {
      setValues(service)
    } else {
      setValues({
        title: '',
        subtitle: '',
        description: '',
        price: '',
        videoUrl: ''
      } as ServiceConsultancyEditing)
    }

  }, [service])

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const errors = signInServiceValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    setFieldError({})

    if (!values.videoUrl.includes('youtube')) {
      toast.error('Deu erro mané, a url do vídeo tem que ser do YouTube')
      return
    }

    // const urlYoutube = values.videoUrl.replace('watch?v=', 'embed/')

    // const configs: useRequestConfig = {
    //   method: 'POST',//pat
    //   url: '/service',//uiid
    //   sendToken: true,
    //   data: {
    //     title: values.title,
    //     subtitle: values.subtitle,
    //     description: values.description,
    //     price: values.price.replace(',', '.'),
    //     videoUrl: urlYoutube,
    //     priceKind: 'HOUR'
    //   }
    // }

    // const response = await request(configs)

    // if (response.error) {
    //   toast.error('Deu erro mané');
    //   return
    // }
    // toast.success('Agora cadastre seu horário', {
    //   position: "top-center",
    //   autoClose: 15000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   rtl: false,
    //   pauseOnFocusLoss: true,
    //   draggable: true,
    //   pauseOnHover: true
    // });

    // setServiceAndProvider(response.id, response.provider?.id);

    // let responseThumbnail = null
    // if (!response.error && formDataThumbnail) {
    //   const configThumbnail: useRequestConfig = {
    //     method: 'POST',
    //     url: `/service/uploadThumbnail/${response.uuid}`,
    //     sendToken: true,
    //     data: formDataThumbnail
    //   }

    //   responseThumbnail = await request(configThumbnail)
    // }

    // if (responseThumbnail?.error) {
    //   toast.error('Deu erro mané, faça upload da sua Thumbnail novamente')
    //   return
    // }
    // setRegisteredService(true)

    updateConsultancy()
  }

  function updateConsultancy() {
    console.log('entrou aqui')
    const updateService = async () => {
      const urlYoutube = values.videoUrl.replace('watch?v=', 'embed/')
      const config: useRequestConfig = {
        method: 'PATCH',
        url: `/service/${service.uuid}`,
        sendToken: true,
        data: {
          title: values.title,
          subtitle: values.subtitle,
          description: values.description,
          price: values.price.replace(',', '.'),
          videoUrl: urlYoutube,
          priceKind: 'HOUR',
        }
      }
      const response = await request(config)
      console.log('entrou aqui respo', response)
      if (response) {
        toast.success('Consultoria atulizada com sucesso')
      }

      let responseThumbnail = null
      if (!response.error && formDataThumbnail) {
        const configThumbnail: useRequestConfig = {
          method: 'POST',
          url: `/service/uploadThumbnail/${response.uuid}`,
          sendToken: true,
          data: formDataThumbnail
        }

        responseThumbnail = await request(configThumbnail)
      }

      if (responseThumbnail?.error) {
        toast.error('Deu erro mané, faça upload da sua Thumbnail novamente')
        return
      }
    }
    updateService()
  }

  const handleThumbnailChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const formData = new FormData()

        formData.append('thumbnail', event.target.files[0])

        setformDataThumbnail(formData)
      }
    }, [])

  const setMaskPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const Home = () => {
    Router.push('/')
  }

  async function CancelConsultancy() {
    const deleteService = async () => {
      const config: useRequestConfig = {
        method: 'DELETE',
        url: `/service/${service.uuid}`
      }
      const response = await request(config) // TODO colocar mensagem de erro, mesmo esquema dos demais
    }

    deleteService()
  }
  return (
    <S.Wrapper>
      <form onSubmit={handleSubmit}>
        <S.FormInputs>
          <TextField
            label="Título"
            labelFor="title"
            value={values?.title}
            placeholder="Coloque o título da consultoria"
            error={fieldError?.title}
            onInputChange={(v) => handleInput('title', v)}
            icon={<AccountCircle />}
          />
          <TextField
            textArea={true}
            label="Subtítulo"
            labelFor="subtitle"
            value={values?.subtitle}
            placeholder="Coloque o Subtítulo da consultoria"
            error={fieldError?.subtitle}
            onInputChange={(v) => handleInput('subtitle', v)}
            icon={<AccountCircle />}
          />
          <TextField
            textArea={true}
            css={{ height: 200 }}
            label="Descrição"
            labelFor="description"
            value={values?.description}
            placeholder="Coloque a descrição da consultoria"
            error={fieldError?.description}
            onInputChange={(v) => handleInput('description', v)}
            icon={<AccountCircle />}
          />
          <TextField
            label="Preço por hora"
            name="price"
            type="text"
            labelFor="price"
            style={{ WebkitAppearance: 'none' }}
            value={values?.price}
            error={fieldError?.price}
            onChange={(e) => setMaskPrice(currencyMask(e))}
            icon={<Money />}
          />
          <S.LabelThumbnail>Thumbnail</S.LabelThumbnail>
          <S.Input>
            <S.Icon>
              <AccountCircle />
            </S.Icon>
            <input
              type="file"
              id="sadas"
              multiple={false}
              name="thsadasdumbnail"
              accept="image/png, image/jpeg"
              onChange={handleThumbnailChange}
            />
          </S.Input>
          <TextField
            label="Url do vídeo"
            labelFor="videoUrl"
            value={values?.videoUrl}
            placeholder="Coloque a url da vídeo da sua consultoria"
            error={fieldError?.videoUrl}
            onInputChange={(v) => handleInput('videoUrl', v)}
            icon={<AccountCircle />}
          />
        </S.FormInputs>
      </form>
      <S.FormButton>
        <Button fullWidth width={'huge'} variant="blue" type="submit">
          Editar Consultoria
        </Button>
        <S.SepareButton>
          <Button fullWidth width={'huge'} onClick={CancelConsultancy} variant="red">
            Cancelar Consultoria
          </Button>
        </S.SepareButton>
      </S.FormButton>
    </S.Wrapper>
  )
}

export default ProviderForm;
