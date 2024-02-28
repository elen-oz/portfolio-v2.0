type StripedBackgroundProps = {
  color: string;
};

const StripedBackground = ({ color }: StripedBackgroundProps) => {
  return (
    <div className='z-0 absolute top-0 left-0 right-0 flex pf-container sm:px-0 justify-between sm:justify-evenly h-full'>
      <div className={`w-[30px] h-full bg-${color}`}></div>
      <div className={`w-[30px] h-full bg-${color}`}></div>
      <div className={`w-[30px] h-full bg-${color}`}></div>
      <div className={`w-[30px] h-full bg-${color}`}></div>
      <div className={`w-[30px] h-full bg-${color} hidden sm:block`}></div>
      <div className={`w-[30px] h-full bg-${color} hidden sm:block`}></div>
      <div className={`w-[30px] h-full bg-${color} hidden sm:block`}></div>
      <div className={`w-[30px] h-full bg-${color} hidden sm:block`}></div>
    </div>
  );
};
export default StripedBackground;
