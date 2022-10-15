import React, { useContext, useRef } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../styles/login.css";
import swal from "sweetalert";

export const Signup = () => {
    const navigate = useNavigate();
    const form = useRef();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        // FETCH PARA REGISTRO
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({

            email: data.email,
            password: data.password,

        });

        var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch(
            "https://3001-edwardsfons-reactjsflas-zjw4a1v3e12.ws-us71.gitpod.io/api/registro",
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                console.log(typeof result);
                console.log(result);
                console.log(JSON.parse(result));
                console.log(JSON.parse(result).mensaje);

                if (JSON.parse(result).mensaje === "Usuario Registrado") {
                    swal("Registro realizado exitosamente", "", "success");
                    navigate("/login");
                }
                if (JSON.parse(result).mensaje === "Email ya registrado") {
                    swal("Email ya registrado", "", "warning");
                }
            })
            .catch((error) => {
                console.log("error", error);
                swal("Ha ocurrido un error", "", "warning");
            });
    };

    return (
        <section class="ftco-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center mb-5">
                        <h2 class="heading-section">Ingresa tus datos</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-6 col-lg-5">
                        <div class="login-wrap p-4 p-md-5">

                            <h3 class="text-center mb-4">Registrate</h3>
                            <form ref={form} onSubmit={handleSubmit(onSubmit)}>
                                <div class="form-group">
                                    <input type="text" class="form-control rounded-left" placeholder="Email"{...register("email", {
                                        required: true,
                                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                                    })} required />{errors.email?.type === "required" && (
                                        <small className="fail">Ingresa un correo electrónico</small>
                                    )}
                                    {errors.email?.type === "pattern" && (
                                        <small className="fail">El formato no es válido</small>
                                    )}
                                </div>
                                <div class="form-group d-flex">
                                    <input type="password" class="form-control rounded-left" placeholder="Password" {...register("password", {
                                        required: true,
                                        pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/,
                                    })} required /> {errors.password?.type === "required" && (
                                        <small className="fail">Ingresa una contraseña</small>
                                      )}
                                      {errors.password?.type === "pattern" && (
                                        <div className="fail">
                                          <span>El formato no es válido. Debe contener, al menos:</span>
                                          <li className="auth">6 caracteres</li>
                                          <li className="auth">1 letra mayúscula</li>
                                          <li className="auth">1 letra minúscula</li>
                                          <li className="auth">1 número</li>
                                        </div>
                                      )}
                                </div>
                                <div class="form-group">
                                    <button type="submit" class="btn btn-primary rounded submit p-3 px-5">Registrar</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
