const Card = (props) => {
  const cardStyle = "";
  return (
    <div className="h-[300px] rounded-[12px] md:mx-10 my-5 w-[350px] bg-blue-50 shadow-gray-500 shadow-xl  mx-auto">
      <div className="w-[80%] flex flex-col  rounded-[12px] h-full mx-auto">
        <div className="bg-blue-500 p-5 w-5 text-white">
          <p className=" text-xl md:text-2xl m-auto">{props.id}</p>
        </div>
        <h1 className="mx-5 my-2 font-bold">{props.name}</h1>
        <h1 className=" mx-5">{props.desc}</h1>
      </div>
    </div>
  );
};
export default Card;
