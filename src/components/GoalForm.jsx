import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function GoalForm({ goal, onSave, onCancel }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'Personal',
    status: 'To Do',
    dueDate: '',
  });

  useEffect(() => {
    if (goal) {
      setFormData({
        title: goal.title || '',
        description: goal.description || '',
        type: goal.type || 'Personal',
        status: goal.status || 'To Do',
        dueDate: goal.dueDate ? goal.dueDate.split('T')[0] : '',
      });
    }
  }, [goal]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="card p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-jira-dark">
          {goal ? 'Editar Meta' : 'Nova Meta'}
        </h2>
        <button
          onClick={onCancel}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <X size={24} />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Título *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="input-field"
              placeholder="Ex: Aprender React"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tipo
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="select-field"
            >
              <option value="Personal">Pessoal</option>
              <option value="Professional">Profissional</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="select-field"
            >
              <option value="To Do">A Fazer</option>
              <option value="In Progress">Em Progresso</option>
              <option value="Done">Concluída</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Data de Vencimento
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              className="input-field"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Descrição
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="input-field"
              rows="4"
              placeholder="Descreva sua meta..."
            />
          </div>
        </div>

        <div className="flex gap-4">
          <button type="submit" className="btn btn-primary">
            {goal ? 'Atualizar' : 'Criar'} Meta
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
