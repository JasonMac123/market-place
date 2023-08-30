"use client";

interface StoreLocationProps {
  streetNumber: number;
  streetName: string;
  city: string;
  region: string;
  postalCode: string;
}

const StoreLocation: React.FC<StoreLocationProps> = ({
  streetNumber,
  streetName,
  city,
  region,
  postalCode,
}) => {
  return (
    <div className="text-blue-700 hover:text-purple-900">
      <h4 className=" hover:cursor-pointer ">
        {streetNumber}, {streetName}
      </h4>
      <h4 className="hover:cursor-pointer">
        {city}, {region} {postalCode}
      </h4>
    </div>
  );
};

export default StoreLocation;
