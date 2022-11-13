import axios from "axios";
import {useForm} from "react-hook-form"

const UserForm = () => {

    const { handleSubmit, register, formState: { errors }, watch} = useForm();

    async function onSubmit(data){
        console.log(data)
        await axios.post('http://localhost:3001/usuarios', data).then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        window.location.reload();
    }

    return <div>
        <h2>Nuevo Usuario</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Nombre </label>
                <input type="text" {...register('Nombre', {
                    required: true
                })}/>
            </div>
            <div>
                <label>Mail </label>
                <input
                    type="email" {...register("Mail", {
                        required: true,
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: " Mail invalido"
                        }
                    })}
                />
                {errors.email && errors.email.message}
            </div>
            <div>
                <label>Contraseña </label>
                <input {...register("Pass", {
                    required: true,
                    validate: (val, string) => {
                    if (watch('confirm_password') !== val) {
                    return "Las contraseñas no coinciden";
                    }
                },
                })}
                />
            </div>
            <div>
                <label>Confirmar Contraseña </label>
                <input {...register("confirm_password", {
                    required: true
                    })}
                />
            </div>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
}

export default UserForm;