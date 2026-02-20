import { useState, useEffect } from 'react';
import { dashboardAPI } from '../utils/api';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Target, Briefcase, TrendingUp, CheckCircle } from 'lucide-react';

const COLORS = ['#0052CC', '#216E4E', '#974F0C', '#7F5F01'];

export default function Dashboard() {
  const [summary, setSummary] = useState(null);
  const [progressData, setProgressData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      const [summaryRes, progressRes] = await Promise.all([
        dashboardAPI.goalsSummary(),
        dashboardAPI.progressGraph(),
      ]);
      setSummary(summaryRes.data);
      setProgressData(progressRes.data || []);
    } catch (error) {
      console.error('Erro ao carregar dashboard:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-12">Carregando...</div>;
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-jira-dark">Dashboard</h1>
        <p className="text-gray-600 mt-2">Bem-vindo! Aqui está seu progresso pessoal</p>
      </div>

      {/* Stats Cards */}
      {summary && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total de Metas</p>
                <p className="text-3xl font-bold text-jira-dark mt-2">
                  {summary.total || 0}
                </p>
              </div>
              <Target className="text-jira-blue" size={32} />
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Concluídas</p>
                <p className="text-3xl font-bold text-status-done mt-2">
                  {summary.completed || 0}
                </p>
              </div>
              <CheckCircle className="text-status-done" size={32} />
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Em Progresso</p>
                <p className="text-3xl font-bold text-status-progress mt-2">
                  {summary.inProgress || 0}
                </p>
              </div>
              <TrendingUp className="text-status-progress" size={32} />
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Planejadas</p>
                <p className="text-3xl font-bold text-status-todo mt-2">
                  {summary.planned || 0}
                </p>
              </div>
              <Briefcase className="text-status-todo" size={32} />
            </div>
          </div>
        </div>
      )}

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Progress Chart */}
        <div className="card p-6">
          <h2 className="text-xl font-bold text-jira-dark mb-6">Evolução por Período</h2>
          {progressData.length > 0 ? (
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="period" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="completed" stroke="#216E4E" name="Concluídas" />
                <Line type="monotone" dataKey="inProgress" stroke="#0052CC" name="Em Progresso" />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p className="text-center text-gray-500 py-12">Sem dados para exibir</p>
          )}
        </div>

        {/* Status Distribution */}
        {summary && (
          <div className="card p-6">
            <h2 className="text-xl font-bold text-jira-dark mb-6">Distribuição de Status</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={[
                    { name: 'Concluídas', value: summary.completed || 0 },
                    { name: 'Em Progresso', value: summary.inProgress || 0 },
                    { name: 'Planejadas', value: summary.planned || 0 },
                  ]}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {COLORS.map((color, index) => (
                    <Cell key={`cell-${index}`} fill={color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
    </div>
  );
}
