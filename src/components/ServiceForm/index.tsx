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
import { Service } from 'templates/ConsultancyRead'

export type ProviderFormType = {
  setRegisteredService?: Function
  registeredService?: Boolean
  setServiceAndProvider?: Function
  service?: Service
}

const ProviderForm = ({ setRegisteredService, registeredService, setServiceAndProvider }: ProviderFormType) => {
  const [formDataThumbnail, setformDataThumbnail] = useState<null | FormData>(null)
  const [service, setService] = useState<any>(null)
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [countTitle, setCountTitle] = useState(60)
  const [countSubTitle, setCountSubTitle] = useState(100)
  const [countDescription, setCountDescription] = useState(1300)
  const { request } = useRequest()
  const [values, setValues] = useState<Service | null>({
    title: '',
    subtitle: '',
    description: '',
    price: '',
    videoUrl: ''
  } as Service)
  
  const handleInput = (field: string, value: string) => {
    console.log(field)
    if(field === 'title') {
      setCountTitle(60 - value.length)
    }
    if (field === 'subtitle') {
      setCountSubTitle(100 - value.length)
    }
    if (field === 'description') {
      setCountDescription(1300 - value.length)
    }
    setValues((s) => ({ ...s, [field]: value }))
  }

  
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    const errors = signInServiceValidate(values)
    console.log("errors", errors)
    // if (Object.keys(errors).length) {
    //   setFieldError(errors)
    //   return
    // }

    setFieldError({})
    if (values.videoUrl.length >= 1) {
      if (!values.videoUrl.includes('youtube')) {
        toast.error('Deu erro mané, a url do vídeo tem que ser do YouTube')
        return
      }
    }
    
    const anything = values.videoUrl.split('&') 


    const urlYoutube = anything[0].replace('watch?v=', 'embed/')

    const configs: useRequestConfig = {
      method: 'POST',
      url: '/service',
      sendToken: true,
      data: {
        title: values.title,
        subtitle: values.subtitle,
        description: values.description,
        price: values.price.replace(',', '.'),
        videoUrl: urlYoutube,
        priceKind: 'HOUR'
      }
    }

    const response = await request(configs)

    if (response.error) {
      toast.error('Deu erro mané');
      return
    }
    
    toast.success('Agora cadastre seu horário', {
      position: "top-center",
      autoClose: 15000,
      hideProgressBar: false,
      closeOnClick: true,
      rtl: false,
      pauseOnFocusLoss: true,
      draggable: true,
      pauseOnHover: true
    });

    setServiceAndProvider(response);
    setService(response)
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

  const handleThumbnailChange = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files) {
        const formData = new FormData()

        formData.append('thumbnail', event.target.files[0])

        setformDataThumbnail(formData)
      }
    },
    []
  )

  const setMaskPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const Home = () => {
    Router.push('/profile')
  }

  function situation() {
    if (service){
      return (<Button fullWidth width={'huge'} onClick={Home}>
        Cadastrar consultoria
      </Button>)
    }else{
      return (<Button fullWidth width={'huge'} onClick={handleSubmit}>
        Confirmar
      </Button>)
    }
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
            maxLength={60}
            count={countTitle}
          />
          <TextField
            textArea={true}
            label="Subtítulo"
            labelFor="subtitle"
            value={values?.subtitle}
            placeholder="Coloque o Subtítulo da consultoria"
            error={fieldError?.subtitle}
            onInputChange={(v) => handleInput('subtitle', v)}
            maxLength={100}
            count={countSubTitle}
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
            maxLength={1300}
            icon={<AccountCircle />}
            count={countDescription}
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
            placeholder="Insira a URL do seu vídeo"
            error={fieldError?.videoUrl}
            onInputChange={(v) => handleInput('videoUrl', v)}
            icon={<AccountCircle />}
          />
        </S.FormInputs>
      </form>
      <S.FormButton>
        {situation()}
      </S.FormButton>
    </S.Wrapper>
  )
}

export default ProviderForm;
