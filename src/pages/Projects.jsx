import { useState, useEffect } from 'react';
import { projectsAPI } from '../utils/api';
import { Plus, Edit2, Trash2 } from 'lucide-react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const response = await projectsAPI.list();
      setProjects(response.data || []);
    } catch (error) {
      console.error('Erro ao carregar projetos:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Carregando...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-jira-dark">Projetos</h1>
          <p className="text-gray-600 mt-2">Gerencie seus projetos</p>
        </div>
        <button className="btn btn-primary">
          <Plus size={20} />
          Novo Projeto
        </button>
      </div>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="card p-6">
              <h3 className="text-lg font-bold text-jira-dark mb-2">{project.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{project.description}</p>
              <div className="flex gap-2">
                <button className="btn btn-secondary btn-sm">
                  <Edit2 size={16} />
                </button>
                <button className="btn btn-danger btn-sm">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 card">
          <p className="text-gray-600">Nenhum projeto criado ainda</p>
        </div>
      )}
    </div>
  );
}
