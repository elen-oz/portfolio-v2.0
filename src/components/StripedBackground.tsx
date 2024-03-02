type StripedBackgroundProps = {
  color: string;
};

const StripedBackground = ({ color }: StripedBackgroundProps) => {
  return (
    <div className='pf-container absolute left-0 right-0 top-0 z-0 flex h-full justify-between sm:justify-evenly sm:px-0'>
      <div className={`h-full w-[30px] bg-${color}`}></div>
      <div className={`h-full w-[30px] bg-${color}`}></div>
      <div className={`h-full w-[30px] bg-${color}`}></div>
      <div className={`h-full w-[30px] bg-${color}`}></div>
      <div className={`h-full w-[30px] bg-${color} hidden sm:block`}></div>
      <div className={`h-full w-[30px] bg-${color} hidden sm:block`}></div>
      <div className={`h-full w-[30px] bg-${color} hidden sm:block`}></div>
      <div className={`h-full w-[30px] bg-${color} hidden sm:block`}></div>
    </div>
  );
};
export default StripedBackground;
