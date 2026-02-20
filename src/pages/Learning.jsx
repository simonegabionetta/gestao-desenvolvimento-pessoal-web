import { useState, useEffect } from 'react';
import { Plus } from 'lucide-react';

export default function Learning() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold text-jira-dark">Learning</h1>
        <button className="btn btn-primary">
          <Plus size={20} />
          Novo Item
        </button>
      </div>
      <div className="text-center py-12 card">
        <p className="text-gray-600">Nenhum item criado ainda</p>
      </div>
    </div>
  );
}
