import { useState } from 'react';

interface AddMovieProps {
  onAdd: (title: string) => void;
}

export const AddMovie = ({ onAdd }: AddMovieProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Введите название фильма"
      />
      <button type="submit">Add</button>
    </form>
  );
};