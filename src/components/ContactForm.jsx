
import { useState } from "react";
import { toast } from "react-toastify";

export default function ContactForm(){
  const [form,setForm]=useState({name:"",email:"",message:""});
  const [errors,setErrors]=useState({});

  const validate=()=>{
    let err={};
    if(!form.name.trim()) err.name="Name required";
    if(!form.email) err.email="Email required";
    else if(!/\S+@\S+\.\S+/.test(form.email)) err.email="Invalid email";
    if(!form.message.trim()) err.message="Message required";
    return err;
  }

  const submit=(e)=>{
    e.preventDefault();
    const err=validate();
    if(Object.keys(err).length){
      setErrors(err);
      toast.error("please enter required fields");
      return;
    }
    toast.success("Message sent!");
    setForm({name:"",email:"",message:""});
    setErrors({});
  }

  return(
    <form className="contact-form" onSubmit={submit}>
      <input placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/>
      {errors.name && <span className="error">{errors.name}</span>}

      <input placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})}/>
      {errors.email && <span className="error">{errors.email}</span>}

      <textarea placeholder="Message" value={form.message} onChange={e=>setForm({...form,message:e.target.value})}/>
      {errors.message && <span className="error">{errors.message}</span>}

      <button>Send Message</button>
    </form>
  );
}
