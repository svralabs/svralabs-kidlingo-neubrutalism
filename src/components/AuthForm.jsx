import { useState } from 'react';

export default function AuthForm({ type, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = 'Email required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.password) {
      newErrors.password = 'Password required';
    }

    if (type === 'register') {
      if (!formData.name) {
        newErrors.name = 'Name required';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-md">
      {type === 'register' && (
        <div className="space-y-sm">
          <label className="font-label-bold text-label-bold block">Nama Lengkap</label>
          <input
            className={`w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10 ${errors.name ? 'border-error' : ''}`}
            placeholder="Budi Santoso"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-error text-sm">{errors.name}</p>}
        </div>
      )}

      <div className="space-y-sm">
        <label className="font-label-bold text-label-bold block">Email</label>
        <input
          className={`w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none ${type === 'login' ? 'focus:bg-primary-container/10' : 'focus:bg-secondary-container/10'} ${errors.email ? 'border-error' : ''}`}
          placeholder="nama@email.com"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <p className="text-error text-sm">{errors.email}</p>}
      </div>

      {type === 'register' && (
        <>
          <div className="space-y-sm">
            <label className="font-label-bold text-label-bold block">No. Telepon</label>
            <input
              className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
              placeholder="08123456789"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div className="space-y-sm">
            <label className="font-label-bold text-label-bold block">Alamat</label>
            <textarea
              className="w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none focus:bg-secondary-container/10"
              placeholder="Jl. Mawar No. 123, Jakarta"
              rows="3"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </>
      )}

      <div className="space-y-sm">
        <label className="font-label-bold text-label-bold block">Password</label>
        <input
          className={`w-full p-md border-2 border-black rounded-lg focus:ring-0 focus:outline-none ${type === 'login' ? 'focus:bg-primary-container/10' : 'focus:bg-secondary-container/10'} ${errors.password ? 'border-error' : ''}`}
          placeholder={type === 'login' ? '••••••••' : 'Minimal 8 karakter'}
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <p className="text-error text-sm">{errors.password}</p>}
        {type === 'login' && (
          <div className="text-right">
            <a className="text-secondary font-label-bold text-label-bold hover:underline" href="#">Lupa password?</a>
          </div>
        )}
      </div>

      <button
        className={`w-full py-md ${type === 'login' ? 'bg-primary-container text-on-primary-fixed-variant' : 'bg-secondary-container text-on-secondary-container'} font-headline-main-mobile text-[20px] neubrutal-card neubrutal-button-active transition-all mt-md`}
        type="submit"
      >
        {type === 'login' ? 'Masuk' : 'Daftar'}
      </button>

      {type === 'login' && (
        <p className="text-center text-on-surface-variant font-body-md text-sm mt-md">
          Login menggunakan otentikasi email.
        </p>
      )}
    </form>
  );
}
