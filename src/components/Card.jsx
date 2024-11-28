import { Link } from "react-router-dom";
function Card(props) {
  // eslint-disable-next-line react/prop-types
  const {data} = props
  console.log(data)
  return (
    // eslint-disable-next-line react/prop-types
    <Link to={`/product/${data.id}`} className="border border-gray-400 group">
      <figure className="p-2 h-[160px] lg:h-[260px] overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-all"
          // eslint-disable-next-line react/prop-types
          src={data.image}
          alt=""
        />
      </figure>
      <div className="px-2 py-2">
        <h3 className="line-clamp-1">
           {data.title}
        </h3>
        <p className="text-red-600">${data.price}</p>
      </div>
    </Link>
  );
}

export default Card;
