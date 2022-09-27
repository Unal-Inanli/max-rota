import React, { useId } from 'react';
import PrimaryButton from './Buttons/PrimaryButton';
import { Controller, useForm } from "react-hook-form";
import FormError from './FormError';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import DispatchContext from '../context/DispatchContext';
import AppStateContext from '../context/AppStateContext';


const InviteForm = () => {


    const [countryCode, setCountryCode] = React.useState();
    const { alertsDispatch } = React.useContext(DispatchContext);
    const { localeContext } = React.useContext(AppStateContext);

    const { mutate, isLoading } = useMutation(SendForm, {
        onSuccess: (res) => {
            if (res.data.status) {
                alertsDispatch({ name: "alert", id: Math.random() * 100, type: "success", "message": "Hesap başarıyla oluşturuldu!" })
            }
            else {
                alertsDispatch({ name: "alert", id: Math.random() * 100, type: "failed", "message": res.data.msg })

            }
        }
    });


    React.useEffect(() => {
        setCountryCode(localeContext.country_code);
    }, [localeContext]);


    const { register, handleSubmit, control, watch, formState: { errors } } = useForm();

    const text = `Denemeye başla butonuna tıklayarak GCM'den elektronik ileti almayı, kullanım koşullarını, kişisel verilerin
    işlenmesine ilişkin aydınlatma metni ve izin Formu'nu kabul ediyorum.`

    const onSubmit = data => {
        mutate({ ...data, countryCode: countryCode });
    };


    return (

        <div className="form_area">
            <form>
                <div className="item">
                    <input {...register("name", { required: true, min: 1 })} placeholder="Adınız Soyadınız" autoComplete="off" />
                    <FormError condition={errors.name}>This field is required</FormError>
                </div>
                <div className="item">
                    <input {...register("email", { required: true, min: 1 })} placeholder="E-posta" autoComplete="off" />
                    <FormError condition={errors.email}>This field is required</FormError>
                </div>
                <div className="item">
                    {/* <input  {...register("phone", { required: true, min: 1 })} placeholder="Telefon" autoComplete="off" /> */}
                    <PhoneInputWithCountry international={true} limitMaxLength={true} defaultCountry={countryCode} onCountryChange={code => setCountryCode(code)} style={{ background: "#0D1C29" }} control={control} rules={{ required: true }} name="phone" placeholder={"Telefon"} />
                    <FormError condition={errors.phone}>This field is required</FormError>
                </div>
                <span>
                    {text}
                </span>

                <PrimaryButton onClick={handleSubmit(onSubmit)}>
                    Denemeye Başla
                </PrimaryButton>
            </form>
        </div>
    );
}


const SendForm = (data) => {
    return axios.post("https://rotaapi.fxcrm.me/api/new", { name: data.name, mail: data.email, phone: data.phone, ref: "a", ulke: data.countryCode }, {
        headers: {
            "token": "2s98XDwWauJNjpXQRFvPgUwQFQrEEQ"
        }
    });
}



export default InviteForm;
