import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import SessionCheck from "../component/sessioncheck";

export default function AddAdmin() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const validateFile = (value) => {
        const file = value[0];
        const allowedtypes = ["image/jpg", "image/png"];
        if (!allowedtypes.includes(file.type)) {
            return false;
        }
    };

    const [success, setSuccess] = useState("");

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("phone", data.phone)
        formData.append("password", data.password);
        formData.append("nid", data.nid);
        formData.append("education", data.education);
        console.log(formData);

        try {
            const response = await axios.post("http://localhost:3000/doctor/signup", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            setSuccess("Signup Successfull");
            reset();
        } catch (error) {
            console.log(error.response.data.message);
            setSuccess("Signup unsuccessfull " + error.response.data.message);
        }
    };
    //  name, nid, email, password, education, phone number
    return (
        <>
            {/* <SessionCheck /> */}
            <div className="my-10">
                <section className=" ">
                    <div className="flex flex-col items-center justify-center px-auto mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Create an account
                                </h1>
                                <p id="filled_success_help" className="mt-2 text-xs text-green-600 dark:text-green-400">
                                    <span className="font-medium"> {success}</span>
                                </p>

                                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name"
                                            required=""
                                            {...register("name", { required: true })}
                                        />
                                        {errors.name && (
                                            <p
                                                id="outlined_error_help"
                                                className="mt-2 text-xs text-red-600 dark:text-red-400"
                                            >
                                                <span className="font-medium">Name is required</span>
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            required=""
                                            {...register("email", {
                                                required: true,
                                                pattern: /\S+@\S+\.\S+/,
                                            })}
                                        />
                                        {errors.email && (
                                            <p>
                                                {errors.email.type === "required" ? (
                                                    <p
                                                        id="outlined_error_help"
                                                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                                                    >

                                                        <span className="font-medium">
                                                            Email is required
                                                        </span>
                                                    </p>
                                                ) : (
                                                    <p
                                                        id="outlined_error_help"
                                                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                                                    >
                                                        <span className="font-medium">
                                                            Invalid email address
                                                        </span>
                                                    </p>
                                                )}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="phone"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            id="phone"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="01712345671"
                                            required=""
                                            {...register("phone", {
                                                required: true,
                                            })}
                                        />
                                        {errors.phone && (
                                            <p>
                                                {errors.phone.type === "required" ? (
                                                    <p
                                                        id="outlined_error_help"
                                                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                                                    >

                                                        <span className="font-medium">
                                                            Phone number is required
                                                        </span>
                                                    </p>
                                                ) : (
                                                    <p
                                                        id="outlined_error_help"
                                                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                                                    >
                                                        <span className="font-medium">
                                                            Invalid phone number
                                                        </span>
                                                    </p>
                                                )}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                            {...register("password", {
                                                required: true,
                                                // pattern: /^\d+$/,
                                                minLength: 8,
                                            })}
                                        />
                                        {errors.password && (
                                            <p>
                                                {errors.password.type === "required" ? (
                                                    <p
                                                        id="outlined_error_help"
                                                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                                                    >
                                                        <span className="font-medium">
                                                            password is required
                                                        </span>
                                                    </p>
                                                ) : (
                                                    <p
                                                        id="outlined_error_help"
                                                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                                                    >
                                                        <span className="font-medium">
                                                            Invalid password pattern
                                                        </span>
                                                    </p>
                                                )}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="nid"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            NID
                                        </label>
                                        <input
                                            type="text"
                                            id="nid"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="902389233"
                                            required=""
                                            {...register("nid", {
                                                required: true,
                                            })}
                                        />
                                        {errors.nid && (
                                            <p>
                                                {errors.nid.type === "required" ? (
                                                    <p
                                                        id="outlined_error_help"
                                                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                                                    >

                                                        <span className="font-medium">
                                                            NID is required
                                                        </span>
                                                    </p>
                                                ) : (
                                                    <p
                                                        id="outlined_error_help"
                                                        className="mt-2 text-xs text-red-600 dark:text-red-400"
                                                    >
                                                        <span className="font-medium">
                                                            Invalid NID
                                                        </span>
                                                    </p>
                                                )}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label
                                            htmlFor="education"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Education
                                        </label>
                                        <input
                                            type="text"
                                            id="education"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 adark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Education"
                                            required=""
                                            {...register("education", { required: true })}
                                        />
                                        {errors.education && (
                                            <p
                                                id="outlined_error_help"
                                                className="mt-2 text-xs text-red-600 dark:text-red-400"
                                            >
                                                <span className="font-medium">Education is required</span>
                                            </p>
                                        )}
                                    </div>


                                    <button
                                        type="submit"
                                        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                                        Submit
                                    </button>

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

