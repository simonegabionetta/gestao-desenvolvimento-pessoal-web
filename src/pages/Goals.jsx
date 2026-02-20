import { useState, useEffect } from 'react';
import { goalsAPI } from '../utils/api';
import { Plus, Edit2, Trash2, CheckCircle } from 'lucide-react';
import GoalForm from '../components/GoalForm';

const statusColors = {
  'To Do': 'badge-todo',
  'In Progress': 'badge-progress',
  'Done': 'badge-done',
};

export default function Goals() {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingGoal, setEditingGoal] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    loadGoals();
  }, []);

  const loadGoals = async () => {
    try {
      const response = await goalsAPI.list();
      setGoals(response.data || []);
    } catch (error) {
      console.error('Erro ao carregar metas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (data) => {
    try {
      if (editingGoal) {
        await goalsAPI.update(editingGoal.id, data);
      } else {
        await goalsAPI.create(data);
      }
      loadGoals();
      setShowForm(false);
      setEditingGoal(null);
    } catch (error) {
      console.error('Erro ao salvar meta:', error);
    }
  };

  const handleDelete = async (id) => {
    if (confirm('Tem certeza que deseja deletar esta meta?')) {
      try {
        await goalsAPI.delete(id);
        loadGoals();
      } catch (error) {
        console.error('Erro ao deletar meta:', error);
      }
    }
  };

  const handleEdit = (goal) => {
    setEditingGoal(goal);
    setShowForm(true);
  };

  const filteredGoals = filter
    ? goals.filter(g => g.status === filter)
    : goals;

  if (loading) {
    return <div className="text-center py-12">Carregando...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-jira-dark">Metas</h1>
          <p className="text-gray-600 mt-2">Gerencie suas metas pessoais e profissionais</p>
        </div>
        <button
          onClick={() => {
            setEditingGoal(null);
            setShowForm(true);
          }}
          className="btn btn-primary"
        >
          <Plus size={20} />
          Nova Meta
        </button>
      </div>

      {/* Form */}
      {showForm && (
        <GoalForm
          goal={editingGoal}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false);
            setEditingGoal(null);
          }}
        />
      )}

      {/* Filters */}
      <div className="flex gap-2">
        <button
          onClick={() => setFilter('')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === '' ? 'bg-jira-blue text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Todas
        </button>
        <button
          onClick={() => setFilter('To Do')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'To Do' ? 'bg-jira-blue text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          A Fazer
        </button>
        <button
          onClick={() => setFilter('In Progress')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'In Progress' ? 'bg-jira-blue text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Em Progresso
        </button>
        <button
          onClick={() => setFilter('Done')}
          className={`px-4 py-2 rounded-lg font-medium transition-colors ${
            filter === 'Done' ? 'bg-jira-blue text-white' : 'bg-gray-200 text-gray-800'
          }`}
        >
          Concluídas
        </button>
      </div>

      {/* Goals Grid */}
      {filteredGoals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGoals.map(goal => (
            <div key={goal.id} className="card p-6 card-hover">
              <div className="flex items-start justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[goal.status] || 'badge-todo'}`}>
                  {goal.status}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(goal)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <Edit2 size={18} className="text-gray-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(goal.id)}
                    className="p-2 hover:bg-red-50 rounded-lg"
                  >
                    <Trash2 size={18} className="text-red-600" />
                  </button>
                </div>
              </div>

              <h3 className="text-lg font-bold text-jira-dark mb-2">{goal.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{goal.description}</p>

              <div className="space-y-2 text-sm">
                <p className="text-gray-600">
                  <span className="font-medium">Tipo:</span> {goal.type}
                </p>
                {goal.dueDate && (
                  <p className="text-gray-600">
                    <span className="font-medium">Prazo:</span> {new Date(goal.dueDate).toLocaleDateString('pt-BR')}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <CheckCircle className="mx-auto text-gray-400 mb-4" size={48} />
          <p className="text-gray-600">Nenhuma meta encontrada</p>
        </div>
      )}
    </div>
  );
}
