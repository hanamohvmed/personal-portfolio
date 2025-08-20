import { useForm } from "react-hook-form";
import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const notyf = new Notyf();

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };

  const contactFormSchema = Z.object({
    name: Z.string().nonempty("Required"),
    email: Z.email("Invalid Email").nonempty("Required"),
    subject: Z.string().nonempty("Required"),
    message: Z.string().nonempty("Required")
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const payload = {
        title: data.subject,
        name: data.name,
        email: data.email,
        message: data.message,
        time: new Date().toLocaleString()
      };
      const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
      const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
      const userID = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

      await emailjs.send(serviceID, templateID, payload, { publicKey: userID });
      notyf.success("Thank you for sending a message <3");
      reset(initialValues);
    } catch (error) {
      console.log("FAILED", error);
      notyf.error("Failed to send message, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full text-[#a7a7a7] flex flex-col gap-7"
      >
        <div>
          <label className="label" htmlFor="name">
            Name
          </label>
          <input
            {...register("name")}
            type="text"
            id="name"
            placeholder="Your Name"
            className="input"
            autoComplete="off"
          />
          {errors.name && (
            <span className="text-red-400">{errors.name.message}</span>
          )}
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email
          </label>
          <input
            {...register("email")}
            type="text"
            id="email"
            placeholder="Your Email"
            className="input"
            autoComplete="off"
          />
          {errors.email && (
            <span className="text-red-400">{errors.email.message}</span>
          )}
        </div>
        <div>
          <label className="label" htmlFor="subject">
            Subject
          </label>
          <input
            {...register("subject")}
            type="text"
            id="subject"
            placeholder="Subject"
            className="input"
            autoComplete="off"
          />
          {errors.subject && (
            <span className="text-red-400">{errors.subject.message}</span>
          )}
        </div>
        <div>
          <label className="label" htmlFor="message">
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            placeholder="Message"
            rows={5}
            className="input"
            autoComplete="off"
          />
          {errors.message && (
            <span className="text-red-400">{errors.message.message}</span>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="disabled:opacity-70 w-full py-3 bg-blue-50 text-white-50 font-medium rounded-md hover:bg-blue-600 transition-all duration-300 cursor-pointer"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
