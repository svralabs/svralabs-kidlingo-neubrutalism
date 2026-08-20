import React, { useState } from 'react';
import styles from '../pages/AuthPage.module.css';
import SocialLoginButton from './SocialLoginButton';

export default function AuthForm({ type }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  const isFormValid = () => {
    if (type === 'login') {
      return formData.email && formData.password;
    } else {
      return formData.name && formData.email && formData.phone && formData.address && formData.password;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-md">
      {type === 'register' && (
        <div className="space-y-sm">
          <label className="font-label-bold text-label-bold block">Nama Lengkap</label>
          <input
            className={styles['form-input']}
            placeholder="Budi Santoso"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
      )}
      <div className="space-y-sm">
        <label className="font-label-bold text-label-bold block">Email</label>
        <input
          className={styles['form-input']}
          placeholder={type === 'login' ? "nama@email.com" : "budi@email.com"}
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {type === 'register' && (
        <>
          <div className="space-y-sm">
            <label className="font-label-bold text-label-bold block">No. Telepon</label>
            <input
              className={styles['form-input']}
              placeholder="08123456789"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-sm">
            <label className="font-label-bold text-label-bold block">Alamat</label>
            <textarea
              className={styles['form-input']}
              placeholder="Jl. Mawar No. 123, Jakarta"
              rows="3"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
        </>
      )}
      <div className="space-y-sm">
        <label className="font-label-bold text-label-bold block">Password</label>
        <input
          className={styles['form-input']}
          placeholder={type === 'login' ? "••••••••" : "Minimal 8 karakter"}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {type === 'login' && (
          <div className="text-right">
            <a className="text-secondary font-label-bold text-label-bold hover:underline" href="#">Lupa password?</a>
          </div>
        )}
      </div>
      <button
        type="submit"
        className={`w-full py-md ${type === 'login' ? 'bg-primary-container text-on-primary-fixed-variant' : 'bg-secondary-container text-on-secondary-container'} font-headline-main-mobile text-[20px] neubrutal-card neubrutal-button-active transition-all mt-md`}
        disabled={!isFormValid()}
      >
        {type === 'login' ? 'Masuk' : 'Daftar'}
      </button>
      {type === 'login' && (
        <>
          <p className="text-center text-on-surface-variant font-body-md text-sm mt-md">
            Atau masuk dengan
          </p>
          <div className="space-y-sm">
            <SocialLoginButton icon="mail" text="Masuk dengan Google" onClick={() => {}} />
            <SocialLoginButton icon="facebook" text="Masuk dengan Globe" onClick={() => {}} />
          </div>
          <p className="text-center text-on-surface-variant font-body-md text-sm mt-md">
            Login menggunakan otentikasi email.
          </p>
        </>
      )}
    </form>
  );
}
