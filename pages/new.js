import React from 'react';
import MainLayout from '../layouts/MainLayout';
import Image from "next/image"
import DemoImage from "../public/img/demo_userimg1k.png";
import { useForm } from 'react-hook-form';
import FormError from '../components/FormError';
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form"
import { useMutation } from 'react-query';
import DispatchContext from '../context/DispatchContext';
import axios from 'axios';
import AppStateContext from '../context/AppStateContext';


const Demo = () => {

    const [countryCode, setCountryCode] = React.useState();
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
    const { alertsDispatch, modalDispatch } = React.useContext(DispatchContext);
    const { localeContext } = React.useContext(AppStateContext);



    React.useEffect(() => {
        setCountryCode(localeContext.country_code);
    }, [localeContext]);


    const { mutate, isLoading } = useMutation(SendForm, {
        onSuccess: (res) => {
            if (res.data.status) {
                modalDispatch({
                    type: "success",
                    title: "Başarılı!",
                    body: "Hesabınız Başarıyla oluşturuldu."
                })
            }
            else {
                modalDispatch({
                    type: "failed",
                    title: "Hata!",
                    body: res.data.msg || "İsteğinizi Oluştururken Bir Hata Oluştu."
                })
            }
        }
    });

    const onSubmit = data => {
        mutate({ ...data, countryCode: countryCode });
    };


    return (
        <MainLayout title={"RotaCapital - New Account"}>
            <div className="acoo_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="acoo_left">
                                <div className="aco_bg"></div>
                                <div className="acoo_img">
                                    <Image src={DemoImage} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="acoo_right">
                                <h4><label>Yeni</label> Hesap Oluştur</h4>
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>

                                <div className="acoo_item">
                                    <input {...register("name", { required: true, min: 1 })} placeholder="Adınız Soyadınız" autoComplete="off" />
                                    <FormError condition={errors.name}>This field is required</FormError>
                                </div>
                                <div className="acoo_item">
                                    <input {...register("email", { required: true, min: 1 })} placeholder="E-posta" autoComplete="off" />
                                    <FormError condition={errors.email}>This field is required</FormError>
                                </div>
                                <div className="acoo_item">
                                    <PhoneInputWithCountry international={true} limitMaxLength={true} defaultCountry={countryCode} onCountryChange={code => setCountryCode(code)} style={{ background: "#132330" }} control={control} rules={{ required: true }} name="phone" placeholder={"Telefon"} />
                                    <FormError condition={errors.phone}>This field is required</FormError>
                                </div>


                                <button className="acoo_submit_btn" onClick={handleSubmit(onSubmit)}>
                                    Hesap Oluştur
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}



const SendForm = (data) => {
    return axios.post("https://rotaapi.fxcrm.me/api/new", { name: data.name, mail: data.email, phone: data.phone, ref: "a", ulke: data.countryCode }, {
        headers: {
            "token": "2s98XDwWauJNjpXQRFvPgUwQFQrEEQ"
        }
    });
}

export default Demo;
