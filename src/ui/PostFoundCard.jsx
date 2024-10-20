export const PostFoundCard = ({ title, description, url }) => {
  return (
    <a href={url} className="bg-lgray-300 rounded p-2 border border-slate-500">
      <h2>{title}</h2>
    </a>
  );
};
