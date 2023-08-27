import { BsPatchCheckFill } from "react-icons/bs";
import { BiSolidGhost } from "react-icons/bi";
import { FcGoogle } from "react-icons/Fc";
import { AiFillGithub } from "react-icons/ai";
import { useState } from "react";

function Login() {
  // Estado para almacenar los datos del formulario
  const [data, setData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data),
      });
  
      const responseData =  response;
      console.log("Respuesta del servidor:", responseData);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  

  return (
    <div className="bg-gray-50 overflow-auto">
      <div className="grid place-items-center reverse grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 h-screen gap-8 p-4">
        <div className="flex items-center justify-center flex-col gap-10">
          <div className="flex items-center">
            <BiSolidGhost size={"40px"} />
            <h2 className="text-xl font-extrabold uppercase">DevCamacho</h2>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="text-center">
              <div className="flex flex-col gap-2 items-center">
                <BsPatchCheckFill size={"20px"} color="blue" />
                <h4 className="font-bold text-l">Obtendras cursos cada semana</h4>
              </div>
              <span className=" text-gray-500">
                Actualización semanal de conocimientos garantizada.
              </span>
            </div>
            <div className="text-center">
              <div className="flex flex-col gap-2 items-center">
                <BsPatchCheckFill size={"20px"} color="blue" />
                <h4 className="font-bold text-l">Colocaras tus conocimentos a prueba</h4>
              </div>
              <span className=" text-gray-500">
                Enfrenta nuevos retos cada semana para fortalecer tu conocimiento.
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white border p-5 px-20 gap-9 w-[550px] grid rounded-md">
          <div className="grid grid-cols-1 gap-2 text-center place-items-center">
            <h2 className="text-2xl text-center">Welcome back</h2>
            <button className="flex p-2 h-3/3 w-3/4 items-center justify-center rounded-md gap-2 border">
              <FcGoogle />
              <h4 className="text-bold">Login with Google</h4>
            </button>
            <button className="flex p-2 h-3/3 w-3/4 items-center justify-center rounded-md gap-2 border">
              <AiFillGithub />
              <h4 className="text-bold">Login with Github</h4>
            </button>
          </div>
          <div className="flex items-center flex-col overflow-auto gap-4">
            <div className="flex items-center gap-4">
              <div className="w-24 h-px bg-gray-200"></div>
              <span>Or</span>
              <div className="w-24 h-px bg-gray-200"></div>
            </div>
            <input
              placeholder="Escribe tu nombre"
              className="bg-gray-50 text-gray-500 px-4 outline-none border w-3/4 p-1 rounded-md"
              type="text"
              name="name"
              id="name"
              value={data.name}
              onChange={handleChange} // Asigna la función handleChange al evento onChange
            />
            <input
              placeholder="Escribe tu apellido"
              className="bg-gray-50 text-gray-500 px-4 outline-none border w-3/4 p-1 rounded-md"
              type="text"
              name="lastname"
              id="lastname"
              value={data.lastname}
              onChange={handleChange} // Asigna la función handleChange al evento onChange
            />
            <input
              placeholder="Tu correo electronico"
              className="bg-gray-50 text-gray-500 px-4 outline-none border w-3/4 p-1 rounded-md"
              type="email"
              name="email"
              id="email"
              value={data.email}
              onChange={handleChange} // Asigna la función handleChange al evento onChange
            />
            <input
              placeholder="Tu contraseña"
              className="bg-gray-50 text-gray-500 px-4 outline-none border w-3/4 p-1 rounded-md"
              type="password"
              name="password"
              id="password"
              value={data.password}
              onChange={handleChange} // Asigna la función handleChange al evento onChange
            />
            <div className="grid grid-cols-2 gap-20">
              <div className="flex gap-2">
                <input type="checkbox" name="remember" id="" />
                <span>Remember</span>
              </div>
              <span className="text-blue-600">Forgot password?</span>
            </div>
            {/* Botón para crear cuenta con evento onClick */}
            <input
              className="bg-blue-700 p-2 w-3/4 text-white rounded-md"
              type="button"
              value="Create account"
              onClick={handleSubmit} // Asigna la función handleSubmit al evento onClick
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
