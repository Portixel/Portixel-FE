interface IProCardProps {
  img?: string;
  title?: string;
}

const ProCard = ({
  img = "/icon/shapes.svg",
  title = "You can create a sub-portfolio account under your profile",
}: IProCardProps) => {
  return (
    <div className="ProCard">
      <img alt="" src={img} width={20} height={20} />
      <p>{title}</p>

      <button>Upgrade to Pro</button>
    </div>
  );
};

export default ProCard;
