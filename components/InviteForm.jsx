import React from 'react';
import PrimaryButton from './Buttons/PrimaryButton';
import { Controller, useForm } from "react-hook-form";
import FormError from './FormError';
import axios from 'axios';
import { useMutation, useQuery } from 'react-query';
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"


const InviteForm = () => {


    const [countryCode, setCountryCode] = React.useState();

    const { mutate, isLoading } = useMutation(SendForm, {
        onSuccess: (data) => {
            console.log(data);
        }
    });

    React.useMemo(() => {
        axios.get("https://ipapi.co/json/").then(res => {
            setCountryCode(res.data.country_code)
        });
    }, [])

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
