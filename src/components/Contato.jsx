import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });
  const [errors, setErrors] = useState({});
  const [feedback, setFeedback] = useState({ message: '', type: '' });
  const [loading, setLoading] = useState(false);

  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'nome':
        if (!value.trim()) error = 'Nome é obrigatório';
        else if (value.trim().length < 2) error = 'Nome deve ter pelo menos 2 caracteres';
        break;
      case 'email':
        if (!value.trim()) error = 'Email é obrigatório';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = 'Email inválido';
        break;
      case 'mensagem':
        if (!value.trim()) error = 'Mensagem é obrigatória';
        else if (value.trim().length < 10) error = 'Mensagem deve ter pelo menos 10 caracteres';
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setFeedback({ message: 'Por favor, corrija os erros no formulário.', type: 'error' });
      return;
    }
    
    setLoading(true);
    setFeedback({ message: '', type: '' });
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setFeedback({ message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.', type: 'success' });
      setFormData({ nome: '', email: '', mensagem: '' });
      setErrors({});
    } catch (error) {
      setFeedback({ message: 'Erro ao enviar mensagem. Tente novamente mais tarde.', type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contato" className="contato-section" role="region" aria-labelledby="contato-title">
      <div className="contato-container">
        <h2 id="contato-title" className="section-title">Entre em Contato</h2>
        <p className="section-subtitle">Estamos sempre prontos para ouvir você</p>
        <div className="contato-content">
          <div className="contato-info">
            <h3>Fale Conosco</h3>
            <p>Nossa equipe está disponível para responder suas dúvidas e receber suas sugestões.</p>
            <div className="contato-details">
              <p><strong>Email:</strong> contato@cocacola.com.br</p>
              <p><strong>Telefone:</strong> 0800 123 4567</p>
              <p><strong>Horário:</strong> Segunda a Sexta, 9h às 18h</p>
            </div>
          </div>
          <form className="contato-form" id="contatoForm" role="form" aria-label="Formulário de contato" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="nome">Nome <span className="required">*</span></label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-required="true"
                aria-describedby="nome-error"
                aria-invalid={!!errors.nome}
              />
              <span className={`error-message ${errors.nome ? 'show' : ''}`} id="nome-error" role="alert">
                {errors.nome}
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-required="true"
                aria-describedby="email-error"
                aria-invalid={!!errors.email}
              />
              <span className={`error-message ${errors.email ? 'show' : ''}`} id="email-error" role="alert">
                {errors.email}
              </span>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem <span className="required">*</span></label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                value={formData.mensagem}
                onChange={handleChange}
                onBlur={handleBlur}
                required
                aria-required="true"
                aria-describedby="mensagem-error"
                aria-invalid={!!errors.mensagem}
              ></textarea>
              <span className={`error-message ${errors.mensagem ? 'show' : ''}`} id="mensagem-error" role="alert">
                {errors.mensagem}
              </span>
            </div>
            {feedback.message && (
              <div className={`form-feedback ${feedback.type} show`} id="formFeedback" role="alert" aria-live="polite">
                {feedback.message}
              </div>
            )}
            <button type="submit" className={`btn btn-primary ${loading ? 'loading' : ''}`} id="submitBtn" disabled={loading}>
              <span className="btn-text">Enviar Mensagem</span>
              <span className="btn-loader" aria-hidden="true"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contato;

