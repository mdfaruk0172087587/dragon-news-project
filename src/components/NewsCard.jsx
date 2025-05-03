import { Star, Eye } from "lucide-react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    category_id,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  const formattedDate = new Date(author.published_date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-4 max-w-md mx-auto mb-5">
      {/* Author & Date */}
      <div className="flex items-center justify-between mb-3 bg-base-200 p-2">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{author.name}</p>
            <p className="text-xs text-gray-500">{formattedDate}</p>
          </div>
        </div>
        <div className="text-gray-400 cursor-pointer text-xl">⋮</div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-bold mb-2 leading-snug">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt="thumbnail"
        className="w-full h-48 object-cover rounded-md mb-3"
      />

      {/* Tags */}
      <p className="text-xs text-gray-500 mb-2">
        {tags.map((tag) => (
          <span key={tag} className="mr-2">#{tag}</span>
        ))}
      </p>

      {/* Details */}
      <p className="text-sm text-gray-700 line-clamp-3">{details}</p>

      {/* Read More */}
      <Link to={`/newsDetails/${category_id}`} className="text-blue-600 text-sm mt-1 cursor-pointer hover:underline">
        Read More
      </Link>

      {/* Footer (Rating & Views) */}
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-1 text-orange-500">
          <Star size={16} fill="currentColor" />
          <span className="text-sm font-medium">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <Eye size={16} />
          <span className="text-sm">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
