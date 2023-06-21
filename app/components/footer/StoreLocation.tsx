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
    <div>
      <h4>
        {streetNumber}, {streetName}
      </h4>
      <h4>
        {city}, {region} {postalCode}
      </h4>
    </div>
  );
};

export default StoreLocation;
