import Card from "./Card";

const CardContainer = () => {
  const arr = [
    {
      id: 1,
      name: "Lorem Ipsum dolar",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi vitae, eum et quo saepe sit ducimus! Quos cumquenostrum, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi",
    },
    {
      id: 2,
      name: " Ipsum Dolar Lorem",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi vitae, eum et quo saepe sit ducimus! Quos cumquenostrum, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi",
    },
    {
      id: 3,
      name: " Dolar Lorem Ipsum",
      desc: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi vitae, eum et quo saepe sit ducimus! Quos cumquenostrum, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi",
    },
  ];
  return (
    <div className="flex items-center justify-center lg:flex-row mb-20 mt-20  flex-col">
      {arr.map((item) => {
        return <Card id={item.id} name={item.name} desc={item.desc} />;
      })}
    </div>
  );
};
export default CardContainer;
