'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X } from 'lucide-react';
import { cases, type Case } from '@/data/cases';

export default function AdminCasesPage() {
  const [casesList, setCasesList] = useState<Case[]>(cases);
  const [editingCase, setEditingCase] = useState<Case | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const emptyCase: Case = {
    id: '',
    title: '',
    description: '',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
    technologies: [],
    clientFeedback: '',
    features: [],
    duration: '',
    price: ''
  };

  const handleCreate = () => {
    setEditingCase(emptyCase);
    setIsCreating(true);
  };

  const handleEdit = (caseItem: Case) => {
    setEditingCase({ ...caseItem });
    setIsCreating(false);
  };

  const handleDelete = (id: string) => {
    if (confirm('确定要删除这个案例吗？')) {
      setCasesList(casesList.filter(c => c.id !== id));
    }
  };

  const handleSave = () => {
    if (!editingCase) return;

    if (isCreating) {
      const newId = String(Math.max(...casesList.map(c => parseInt(c.id)), 0) + 1);
      setCasesList([...casesList, { ...editingCase, id: newId }]);
    } else {
      setCasesList(casesList.map(c => c.id === editingCase.id ? editingCase : c));
    }

    setEditingCase(null);
    setIsCreating(false);
  };

  const handleCancel = () => {
    setEditingCase(null);
    setIsCreating(false);
  };

  const exportToFile = () => {
    const dataStr = `export interface Case {
  id: string;
  title: string;
  description: string;
  category: 'web' | 'app' | 'miniprogram';
  image: string;
  technologies: string[];
  clientFeedback: string;
  features: string[];
  duration: string;
  price: string;
}

export const cases: Case[] = ${JSON.stringify(casesList, null, 2)};

export function getCaseById(id: string): Case | undefined {
  return cases.find(c => c.id === id);
}

export function getCasesByCategory(category: Case['category']): Case[] {
  return cases.filter(c => c.category === category);
}`;

    const blob = new Blob([dataStr], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cases.ts';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">案例管理</h1>
            <p className="text-gray-600">添加、编辑或删除案例，完成后导出数据文件</p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={exportToFile}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-all"
            >
              导出数据
            </button>
            <button
              onClick={handleCreate}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all flex items-center space-x-2"
            >
              <Plus size={20} />
              <span>添加案例</span>
            </button>
          </div>
        </div>

        {/* Edit/Create Form */}
        {editingCase && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-lg mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {isCreating ? '添加新案例' : '编辑案例'}
              </h2>
              <button onClick={handleCancel} className="text-gray-500 hover:text-gray-700">
                <X size={24} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  案例标题 *
                </label>
                <input
                  type="text"
                  value={editingCase.title}
                  onChange={(e) => setEditingCase({ ...editingCase, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="输入案例标题"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  分类 *
                </label>
                <select
                  value={editingCase.category}
                  onChange={(e) => setEditingCase({ ...editingCase, category: e.target.value as any })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="web">Web 开发</option>
                  <option value="app">App 开发</option>
                  <option value="miniprogram">小程序</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  描述 *
                </label>
                <textarea
                  value={editingCase.description}
                  onChange={(e) => setEditingCase({ ...editingCase, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="案例简介"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  图片 URL *
                </label>
                <input
                  type="text"
                  value={editingCase.image}
                  onChange={(e) => setEditingCase({ ...editingCase, image: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="https://..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  技术栈 (用逗号分隔) *
                </label>
                <input
                  type="text"
                  value={editingCase.technologies.join(', ')}
                  onChange={(e) => setEditingCase({
                    ...editingCase,
                    technologies: e.target.value.split(',').map(t => t.trim())
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="React, Node.js, MongoDB"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  项目周期 *
                </label>
                <input
                  type="text"
                  value={editingCase.duration}
                  onChange={(e) => setEditingCase({ ...editingCase, duration: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="30天"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  项目费用 *
                </label>
                <input
                  type="text"
                  value={editingCase.price}
                  onChange={(e) => setEditingCase({ ...editingCase, price: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="¥28,888"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  项目亮点 (每行一个) *
                </label>
                <textarea
                  value={editingCase.features.join('\n')}
                  onChange={(e) => setEditingCase({
                    ...editingCase,
                    features: e.target.value.split('\n').filter(f => f.trim())
                  })}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="响应式设计&#10;完整的订单管理系统&#10;实时数据分析看板"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  客户评价 *
                </label>
                <textarea
                  value={editingCase.clientFeedback}
                  onChange={(e) => setEditingCase({ ...editingCase, clientFeedback: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="客户对项目的评价"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleCancel}
                className="px-6 py-3 border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-all"
              >
                取消
              </button>
              <button
                onClick={handleSave}
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all flex items-center space-x-2"
              >
                <Save size={20} />
                <span>保存</span>
              </button>
            </div>
          </motion.div>
        )}

        {/* Cases List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {casesList.map((caseItem) => (
            <motion.div
              key={caseItem.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={caseItem.image}
                  alt={caseItem.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 flex space-x-2">
                  <button
                    onClick={() => handleEdit(caseItem)}
                    className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
                  >
                    <Edit size={18} className="text-primary-600" />
                  </button>
                  <button
                    onClick={() => handleDelete(caseItem.id)}
                    className="bg-white p-2 rounded-lg shadow-lg hover:bg-gray-100 transition-all"
                  >
                    <Trash2 size={18} className="text-red-600" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {caseItem.category === 'web' && 'Web 开发'}
                  {caseItem.category === 'app' && 'App 开发'}
                  {caseItem.category === 'miniprogram' && '小程序'}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{caseItem.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2 mb-4">{caseItem.description}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">周期: {caseItem.duration}</span>
                  <span className="font-bold text-primary-600">{caseItem.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {casesList.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl">还没有案例，点击上方按钮添加第一个案例吧！</p>
          </div>
        )}
      </div>
    </div>
  );
}

