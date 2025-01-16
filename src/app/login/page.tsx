"use client"; // Add this directive at the top

import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import styles from "../styles/Login.module.css"; // Create a CSS module for styling (optional)
import { useRouter } from "next/navigation"; // Updated import

type LoginFormInputs = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    try {
      const response = await axios.post("/api/login", data);
      if (response.data.success) {
        router.push("/dashboard"); 
      }
    } catch (error) {
      setErrorMessage("Invalid username or password.");
      console.log(error);
      
    }
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <p className={styles.error}>{errors.email.message}</p>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className={styles.error}>{errors.password.message}</p>
          )}
        </div>

        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

        <button type="submit" className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Login;
