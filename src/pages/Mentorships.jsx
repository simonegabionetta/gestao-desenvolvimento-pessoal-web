import { useState, useEffect } from 'react';
import { mentorshipsAPI } from '../utils/api';
import { Plus } from 'lucide-react';

export default function Mentorships() {
  const [mentorships, setMentorships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadMentorships();
  }, []);

  const loadMentorships = async () => {
    try {
      const response = await mentorshipsAPI.list();
      setMentorships(response.data || []);
    } catch (error) {
      console.error('Erro ao carregar mentorias:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-12">Carregando...</div>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-jira-dark">Mentorias</h1>
          <p className="text-gray-600 mt-2">Registre suas mentorias</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Nova Mentoria
        </button>
      </div>

      {mentorships.length > 0 ? (
        <div className="space-y-4">
          {mentorships.map(m => (
            <div key={m.id} className="card p-6">
              <h3 className="text-lg font-bold">{m.title}</h3>
              <p className="text-gray-600 text-sm">{m.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 card">
          <p className="text-gray-600">Nenhuma mentoria registrada</p>
        </div>
      )}
    </div>
  );
}
